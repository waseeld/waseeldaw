const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();

app.use(cors());

app.listen(4000, () => {
	console.log('Server Works !!! At port 4000');
	
});
app.use(express.static('../'))

app.get('/download', (req,res) => {
	var URL = req.query.URL;
	res.header('Content-Disposition', 'attachment; filename="video.mp4"');
	ytdl(URL, {
		format: 'mp4'

	}).pipe(res);
});
// ytdl.getInfo('https://www.youtube.com/watch?v=YQHsXMglC9A', function(err, info) {
//   console.log(info.title) // "Adele - Hello"
// });
// ytdl.getInfo('https://www.youtube.com/watch?v=YQHsXMglC9A', (err, info) => {
// 	if (err) throw err;
// 	let format = ytdl.chooseFormat(info.formats, { quality: '144' });
// 	if (format) {
// 	  console.log('Format found!');
// 	}
//   });
 var was = ytdl.getVideoID("https://www.youtube.com/watch?v=YQHsXMglC9A");
 console.log(was);
 var lo = ytdl.validateID(was);
 console.log(lo);
