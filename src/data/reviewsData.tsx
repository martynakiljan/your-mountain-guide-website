import img1 from '../assets/images/reviews/review-1.jpg'
import img2 from '../assets/images/reviews/review-2.jpg'
import img3 from '../assets/images/reviews/review-3.jpg'
import img4 from '../assets/images/reviews/review-4.jpg'
import img5 from '../assets/images/reviews/review-5.jpg'

export interface ReviewType {
	name: string;
	review: string;
	date: string;
	img: string;
}

const reviewsData = {
	reviews: [
		{
			name: 'Klaus Müller',
			review:
				"The mountain guide Tomi is an exceptional resource for anyone interested in hiking. The guide's organization is impeccable, with each trail meticulously described and mapped. The sections on safety and preparation are especially thorough, providing valuable advice that enhances the hiking experience. I found the detailed trail descriptions particularly useful for planning my routes. Overall, Tomi’s guide is an essential tool for both novice and experienced hikers, ensuring that every trek is well-informed and enjoyable.",
			date: '2024-02-15',
			img: img1,
		},
		{
			name: 'Anna Schmidt',
			review:
				'Tomi’s Mountain Guide stands out for its thorough research and practical advice. Each route is described with precision, offering not only detailed trail information but also insights into the best spots for rest and refreshment. The guide’s recommendations for accommodations and local eateries are spot-on, making it easier to plan a comfortable and enjoyable hiking trip. I appreciated the personal touches and local knowledge woven into the guide, which added depth to my hiking experience. Tomi has truly crafted a guide that enriches every journey.',
			date: '2024-03-10',
			img: img2,
		},
		{
			name: 'Hans Becker',
			review:
				"This guide is incredibly detailed and well-organized, making it an invaluable companion for hikers of all levels. The information on various trails is comprehensive, including tips on the best times to hike and what to expect along the way. The guide also provides excellent safety advice and practical tips for navigating challenging terrain. Whether you're a beginner looking for easy trails or an experienced hiker seeking more adventurous routes, Tomi’s guide has something for everyone. It’s evident that a lot of expertise and care went into creating this resource.",
			date: '2024-04-05',
			img: img3,
		},
		{
			name: 'Laura Wagner',
			review:
				'Tomi’s guide is a treasure trove of information for mountain enthusiasts. The variety of trails covered is impressive, and the guide offers a wealth of knowledge on each one, including historical context and environmental highlights. The personal anecdotes and local stories included in the guide provide a unique and engaging perspective that makes the reading experience enjoyable. The practical advice on gear, weather conditions, and trail preparation is invaluable for ensuring a successful hike. Overall, this guide is not just a tool but an inspirational companion for any mountain adventure.',
			date: '2024-05-20',
			img: img4,
		},
		{
			name: 'Fritz Schneider',
			review:
				'Tomi’s Mountain Guide is a must-have for anyone serious about exploring the mountains. The guide excels in providing clear, detailed instructions and stunning photographs that bring the trails to life. The thorough coverage of various routes, from easy walks to challenging climbs, ensures that there’s something for every level of hiker. The guide’s emphasis on safety and local insights helps prepare hikers for a range of conditions and terrains. Tomi’s intimate knowledge of the trails shines through, making this guide an indispensable asset for planning and enjoying mountain hikes.',
			date: '2024-06-12',
			img: img5,
		},
	],
}

export default reviewsData
