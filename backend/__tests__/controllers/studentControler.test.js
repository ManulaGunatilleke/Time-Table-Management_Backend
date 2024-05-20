// Import necessary modules and dependencies
const Student = require('../../models/student');
const studentController = require('../../controllers/studentController');
const authController = require('../../controllers/authController');

// Mock Student.save to return data in studentController
jest.mock('../../models/student');

// Test cases for registerStudent function
describe('studentController', () => {
    describe('registerStudent', () => {
        const response = {
            json: jest.fn((x) => x),
            status: jest.fn(() => response),
        };

        it('should register a new student', async () => {
            const request = {
                body: {
                    "Fullname": "John Doe",
                    "StudentID": "123456",
                    "Email": "john.doe@example.com",
                    "Address": "123 Main Street",
                    "Phone": 712343546,
                    "UserType": "student",
                    "Gender": "male",
                    "Password": "password"
                }
            };

            const mockSave = jest.fn().mockResolvedValue({});
            Student.mockImplementationOnce(() => ({
                save: mockSave,
            }));

            await authController.registerStudent(request, response);

            expect(mockSave).toHaveBeenCalled();
            expect(response.json).toHaveBeenCalledWith({ message: 'Student registration successful' });
        });

        it('should not register a student with invalid input', async () => {
            const request = {
                body: {
                    "Fullname": "Nisal",
                    "StudentID": "123456",
                    "Email": "john.doe@example.com",
                    "Address": "123 Main Street",
                    "Phone": "123-456-7890",//INVALID
                    "UserType": "student",
                    "Gender": "male",
                    "Password": "password"
                }
            };

            const mockSave = jest.fn().mockResolvedValue({});
            Student.mockImplementationOnce(() => ({
                save: mockSave,
            }));

            await studentController.registerStudent(request, response);

            // Assert that the save function is not called
            expect(mockSave).not.toHaveBeenCalled();
            // Assert that the response does not contain the expected message
            expect(response.status).toHaveBeenCalledWith(500);
            expect(response.json).toHaveBeenCalledWith({ error: 'Student registration failed' });
        });
    });
});

