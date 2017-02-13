module.exports = function (app) {
    var self = {
        list: function(req, res) {
            res.json(['game', 'skate', 'swimming'])
        }
    };
    
    return self;
}