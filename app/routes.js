const express = require('express')
const router = express.Router()
const interface = require('./interface.js')

router.get('/job-specification/:id', async (req, res) => {
    var result = await interface.getJobRole(req.params.id)
    res.render('view-specification.html', {
        jobRole: result
    })});
    
router.get('/view-jobRoles', async (req, res) => {
    var result = await interface.getJobRoles()
    var response = await interface.viewBandLevel()
    var results = await interface.getCapbilities()
    res.render('view-jobRoles', {
        jobRoles: result,
        bandLevel:response,
        capabilities: results
    })});
    
router.get('/view-band-info/:id', async (req, res) => {
    var result = await interface.getTraining(req.params.id)
    var results = await interface.viewBandLevel()
    var response = await interface.getCompetencies(req.params.id)
    res.render('view-band-info.html', {
        training: result,
        bandLevel: results,
        competencies: response
    })});

module.exports = router
