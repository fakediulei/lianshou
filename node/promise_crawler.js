var http = require('http');
var Promise=require('./promise/node_modules/bluebird');
var cheerio=require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/cheerio');
var baseUrl='http://www.imooc.com/learn/'
var videoIds=[637,348,643,646,109];
function filterChar(html){
	var $=cheerio.load(html);
	var chapters=$('.chapter');
	var title=$('.path span').text();
	var number=parseInt($('.static-item').last().find('strong').text().trim(),10);
	var coursesData={
		title:title,
		number:number,
		videos:[] 		
	};
	chapters.each(function(item){
		var chapter=$(this);
		var chapterTitle=chapter.find('h3 strong').text();
		var videos=chapter.find('.video').children('li')
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		}
		videos.each(function(item){
			var video=$(this).find('.studyvideo');
			var videoTitle=video.text();
			var id=video.attr('href').split('video/')[1];
			chapterData.videos.push({
				title:videoTitle,
				id:id 
			})
		});
		coursesData.videos.push(chapterData);
	});
	
	return coursesData;
}
function printCourseInfo(coursesData){
	coursesData.forEach(function(courseData){
		console.log(courseData.number+' 人学过 '+courseData.title+'\n');
		coursesData.forEach(function(courseData){
				console.log('### '+courseData.title+'\n');				
					courseData.videos.forEach(function(item){
						var chapterTitle=item.chapterTitle;	
						console.log(chapterTitle+'\n');
						item.videos.forEach(function(video){
							console.log('   【'+video.id+'】'+video.title+'\n');
						});	
					})
			});

	});

}
function getPageAsync(url){
	return new Promise(function(resolve,reject){
		console.log('正在爬取');
		http.get(url,function(res){
			var html='';
			res.on('data',function(data){
				html+=data;
			});
			res.on('end',function(){
				resolve(html);
			});
		}).on('error',function(e){
			reject(e);
			console.log("获取课程数据失败！");
		});		
	});
}
var fetchCourseArray=[];
videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl+id));
	
})
Promise
	.all(fetchCourseArray)
	.then(function(pages){
		var coursesData=[];
		pages.forEach(function(html){
			var courses=filterChar(html);
			coursesData.push(courses);
		});
		coursesData.sort(function(a,b){
			return a.number<b.number;
		});
		printCourseInfo(coursesData);
	})
