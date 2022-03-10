const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/';

const countries = [
  'argentina',
  'brazil',
  'chile',
  'colombia',
  'paraguay',
  'peru',
  'suriname',
  'uruguay',
];

const getUniversities = async () => {
  const result = [];
  await Promise.all(
    countries.map(async (country) => {
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`,
      );

      return result.push(...data);
    }),
  );

  return result;
};

MongoClient.connect(url, async function (err, db) {
  if (err) throw err;
  let dbo = db.db('universitiesDB');
  let myobj = await getUniversities();
  dbo.collection('universities').insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log('Documents inserted');
    db.close();
  });
});
