
const db = require('../data/dbConfig')
const Hobbits = require('./hobbitsModel');

describe('hobbits model', () => {
    describe('insert', () => {
        it('should insert the provided hobbits into db', async () => {
            await Hobbits.insert({name: "gaffer"});
            await Hobbits.insert({name: "sam"});
    
            const hobbits = await db('hobbits');
            expect(Hobbits).toHaveLength(2);
        })
    })

})

beforeEach(async () => {
    await db('hobbits').truncate();
})