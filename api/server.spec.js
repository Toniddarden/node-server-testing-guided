const request = require("supertest");
const server = require("./server");

describe("server.js", () => {
  it("is running in server env",
    () => {
      expect(process.env.DB_ENV).toBe("testing");
    });


    describe('GET /', () => {
        // http status code
        it('it should return 200', async () => {
            const res = await request(server).get('/')
            expect(res.status).toBe(200);
        })
        // format of the data (JSON)
        it('should return JSON', async() => {
            const res = await request(server).get('/')
            expect(res.type).toBe('application/json');
        })
        // shape of the response
        it('should return{api:"up"} ', async() => {
            const res = await request(server).get('/')
            expect(res.body).toEqual({api:"up"});
        })
    })
});
