
nv.addGraph({
  generate: function() {
    var chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value })
        .margin({top: 30, right: 20, bottom: 50, left: 160})
        .showControls(false);

    chart.yAxis
        .tickFormat(d3.format(',.2f'));

    d3.select('#chart1 svg')
        .datum(exampleData())
      .transition().duration(500)
        .call(chart);

    nv.utils.windowResize(function() { 
      d3.select('#chart1 svg')
        .transition().duration(0)
          .call(chart);
    });

    return chart;
  }
});




function exampleData() {
 return  [ 
    {
      key: 'Short',
      color: '#d62728',
      values: [
        { 
          "label" : "Information Technology" ,
          "value" : -1.8746444827653
        } , 
        { 
          "label" : "Consumer Discretionary" ,
          "value" : -8.0961543492239
        } , 
        { 
          "label" : "Health Care" ,
          "value" : -0.57072943117674
        } , 
        { 
          "label" : "Consumer Staples" ,
          "value" : -2.4174010336624
        } , 
        {
          "label" : "Financials" ,
          "value" : -0.72009071426284
        } , 
        { 
          "label" : "Industrials" ,
          "value" : -0.77154485523777
        } , 
        { 
          "label" : "Energy" ,
          "value" : -0.90152097798131
        } , 
        {
          "label" : "Materials" , 
          "value" : -0.91445417330854
        } , 
        { 
          "label" : "Telecommunication Services" , 
          "value" : -0.055746319141851
        }
      ]
    },
    {
      key: 'Long',
      color: '#1f77b4',
      values: [
        { 
          "label" : "Information Technology" ,
          "value" : 25.307646510375
        } , 
        { 
          "label" : "Consumer Discretionary" ,
          "value" : 16.756779544553
        } , 
        { 
          "label" : "Health Care" ,
          "value" : 18.451534877007
        } , 
        { 
          "label" : "Consumer Staples" ,
          "value" : 8.6142352811805
        } , 
        {
          "label" : "Financials" ,
          "value" : 7.8082472075876
        } , 
        { 
          "label" : "Industrials" ,
          "value" : 5.259101026956
        } , 
        { 
          "label" : "Energy" ,
          "value" : 0.30947953487127
        } , 
        { 
          "label" : "Materials" ,
          "value" : 0
        } , 
        { 
          "label" : "Telecommunication Services" ,
          "value" : 0 
        }
      ]
    }
  ];
}


