const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', bodyParser.json());
app.use('/emojis', bodyParser.urlencoded({extend: false}));

app.get('/', function(req, res){
    res.status(200).send({message: 'success'});
})

app.post('/emojis', function(req, res, next){
    const EMOJIS = [
        ':googly_tim:',
        ':hot_dog_tim:',
        ':rainbowtim:',
        ':realtim:',
        ':tim:',
        ':tim_001:',
        ':tim_002:',
        ':tim_003:',
        ':tim_004:',
        ':tim_005:',
        ':tim_006:',
        ':tim_007:',
        ':tim_008:',
        ':tim_009:',
        ':tim_flip_001:',
        ':tim_flip_002:',
        ':tim_flip_003:',
        ':tim_flip_004:',
        ':tim_flip_005:',
        ':tim_flip_006:',
        ':tim_flip_007:',
        ':tim_flip_008:',
        ':tim_flip_009:',
        ':timbow_001:',
        ':timbow_002:',
        ':timbow_003:',
        ':timbow_004:',
        ':timbow_005:',
        ':timbow_006:',
        ':timbow_007:',
        ':timbow_008:',
        ':timbow_009:',
        ':timbow_010:',
        ':timbow_011:',
        ':timbow_012:',
        ':timbow_013:',
        ':timbow_014:',
        ':timbow_015:',
        ':timmy:',
        ':timmy2:',
        ':trippytim:',
    ]

    const requestOptions = {
        url: req.body.response_url,
        json: {
            'response_type': 'in_channel',
            'text': `${EMOJIS.join(' ')}` 
        },
        headers: {
            'Content_Type': 'application/json'
        }
    }
    console.log('REQUEST BODY', req.body)
    request.post(requestOptions, function(err, response){
        if (err){
            res.status(500).send({err: err});
            return;
        }
        res.status(200).end()
    })
    
})

app.listen(port, () => {
    console.log('App listening on port: ' + port)
})