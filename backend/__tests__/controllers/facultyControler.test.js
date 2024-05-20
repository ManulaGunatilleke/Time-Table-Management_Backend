const request = require('supertest');
const app = require('../../server');
const Faculty = require('../../models/faculty');

describe('Faculty Controller', () => {
  describe('POST /enrolment', () => {
    it('should create a new Enrolment', async () => {
      const FacultyData = {
        "FacultyName": "Jane",
        "DepartmentName": "Engineering"
    };

      const response = await request(app)
        .post('/faculties/createFaculty')
        .send(FacultyData)
        .expect(201);

      expect(response.body.message).toBe('enrolment created successfully');
    });

    it('should not create a Faculty with invalid input', async () => {
      const invalidFacultyData = {
        "FacultyName": "Jane",
        "DepartmentName": ""
    };

      const response = await request(app)
        .post('/faculties/createFaculty')
        .send(invalidFacultyData)
        .expect(500);

      expect(response.body.error).toBe('Failed to create enrolment');
    });
  });
});