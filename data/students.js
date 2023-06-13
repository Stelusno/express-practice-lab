const studentNames = [ 
    {name: 'Sam', present: true},
    {name: 'Jacob', present: false},
    {name: 'Sophie', present: true}
];

module.exports = {
    getAll: function() {
    return studentNames; 
    }
}