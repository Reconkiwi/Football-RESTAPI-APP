$.ajax({
  headers: { 'X-Auth-Token': '98dd4b2b231847819250e520695afbb2' },
  url: 'http://api.football-data.org/v2/matches?status='LIVE',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {

  console.log(response);
});
