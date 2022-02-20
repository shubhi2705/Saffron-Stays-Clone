
import React from 'react';


const Hotels = ({rooms}) => {
	return (
		<div className="RoomsList">
			{rooms.map((room) => (
				<div className='image-container' >
					<div className='container'>
					<img className='img' src='https://tinyurl.com/2m6e4kk7' alt='room-image'></img>
                    <button className='image-btn '>
					<i class="fa fa-heart save-icon"></i>
							Save
					</button>
					</div>
					<div className="rooms-info">
						<div className="locationName">
							<h1>Sea La Vie</h1><br/>
							<h3 className='location'>
							<span className='locationIcon'><i class="fa">&#xf041;</i></span>
								<span className='locationPlace'>Alibaug, Maharastra</span></h3>
						</div>
						<div className='hotelType'>
                                <span>Entire Villa&nbsp; |&nbsp;3 BedRoom&nbsp;|&nbsp;6 Guests </span>					
						</div>					                   
						<div className='buttons'>

                           <div className="button1">
							   <button>Pet-friendly</button>
						   </div>
						   <div className="button1">
							   <button>Free Cancellation</button>
						   </div>
						 </div>
						 <div>
						 <div class="rating">
							 <span>4.5  &nbsp;&nbsp;</span>
							 <span>
							 <i class="fa fa-star checked" title="1 star"></i>
   							 <i class="fa fa-star checked" title="2 star"></i>
   							 <i class="fa fa-star checked" title="3 star"></i>
   							 <i class="fa fa-star checked" title="4 star"></i>
   							 <i class="fa fa-star" title="5 star"></i>
							 </span>
						     <span className='ratingReviews'> &nbsp;| 105 Reviews</span>
                         </div>
						 </div>
						 <div className='underLine'></div>
						 <div className='priceAndDetails'>
						 <div className='priceDetails'>
						   <div className='pricePerNight'>
                                <span className='price1'>₹1,48,680</span>
								<strike><span className='price2'>₹1,48,680</span></strike>
							</div>
							<div>
								<span className='perNight'>per night</span>
						  </div>
						 </div>	
						 <div className='viewDetails'>
                           <button class='btn btn-outline '>View Details</button>
						 </div>
						 </div>
										
				       </div>
                    </div>                
			))}
		</div>
	);
};

export default Hotels;