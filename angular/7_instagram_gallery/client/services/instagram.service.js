angular.module('galPhoto')

.factory('instagram', function($resource){
  return {
    fetchPopular: function(callback){
      var api = $resource('https:api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
        client_id: '093302af63144190a5f4d7e337a87c7f'
      },{
        fetch:{method: 'JSONP'}
      });

      api.fetch(function(res){
        callback(res.data);
      });
    }
  }
})
