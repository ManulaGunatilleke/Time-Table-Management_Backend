const request = require('supertest');
const app = require('../../server');
const Course = require('../../models/course');

describe('Course Controller', () => {
  describe('POST /courses', () => {
    it('should create a new course', async () => {
      const courseData = {
        Code: 'CSE101',
        CourseName: 'Introduction to Computer Science',
        Description: 'This course covers the basics of computer science.',
        Credits: 3,
      };

      const response = await request(app)
        .post('/courses/createCourse')
        .send(courseData)
        .expect(201);

      expect(response.body.message).toBe('Course created successfully');
    });

    it('should not create a course with invalid input', async () => {
      const invalidCourseData = {
        Code: 'CSE101',
        CourseName: 'Introduction to Computer Science',
        Description: '', // INVALID
        Credits: 3,
      };

      const response = await request(app)
        .post('/courses/createCourse')
        .send(invalidCourseData)
        .expect(500);

      expect(response.body.error).toBe('Failed to create course');
    });
  });
});
