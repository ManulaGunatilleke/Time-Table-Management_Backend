const request = require('supertest');
const app = require('../../server');
const Enrolment = require('../../models/enrolment');

describe('Enrolment Controller', () => {
  describe('POST /enrolment', () => {
    it('should create a new Enrolment', async () => {
      const EnrolmentData = {
        "EnrolmentID": "ENR001",
        "StudentID": "STU001",
        "StudentName": "John Doe",
        "Enrolment": {
            "Code": "CSE101",
            "EnrolmentName": "Introduction to Computer Science",
            "Description": "A beginner's Enrolment in computer science.",
            "Credits": 4
        }
    };

      const response = await request(app)
        .post('/enrolments/createEnrolment')
        .send(EnrolmentData)
        .expect(201);

      expect(response.body.message).toBe('enrolment created successfully');
    });

    it('should not create a Enrolment with invalid input', async () => {
      const invalidEnrolmentData = {
        "EnrolmentID": "ENR001",
        "StudentID": "STU001",
        "StudentName": "John Doe",
        "Enrolment": {
            "Code": "CSE101",
            "EnrolmentName": "Introduction to Computer Science",
            
        }
    };

      const response = await request(app)
        .post('/enrolments/createEnrolment')
        .send(invalidEnrolmentData)
        .expect(500);

      expect(response.body.error).toBe('Failed to create enrolment');
    });
  });
});
