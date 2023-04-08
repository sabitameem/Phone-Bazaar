import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-container'>
            <h1 className='text-3xl font-bold text-orange-500 text-center mb-3'>More Info</h1>


     <h3 className='text-white bg-orange-400 p-3 rounded-lg text-lg '>
     Mobile phones started to become popular in Bangladesh in the late ’90s. The first phones were way oversized compared to any phone of today. There was an antenna on top of the phone, and they used to be quite troublesome to carry because of their weight. These were technically called “brick phones.” There was just one thing you could do with a phone, make a call. But these phones were quite pricey, and it was quite prestigious to own such a simple mobile phone at that time. These phones are not available anymore on the market.
     </h3>
     <h2 className='text-orange-700 text-xl font-bold p-2 rounded-md my-3'>Feature Phones :</h2>
     <h3 className='text-white bg-orange-400 p-3 rounded-lg text-lg '>
     Then at the beginning of the 20th century came the somewhat smarter so-called “bar phones” or “feature phones.” They are also called as “button phones” in Bangladesh. These phones had text message option, MMS, polyphonic ringtones, FM radio, 3.5 mm jack, simple games, Bluetooth and some of them also had a low-quality back camera. Feature phones gained rapid popularity among the people of Bangladesh. The entry-level feature phones were more priceworthy than the first generation mobile phones in Bangladesh and it offered many more features at the same time. It is because, by that time the technology was advancing faster, the market was growing, new brands were bringing new ideas and offers. MP3 ringtones, Mp3 player, videos, internet access through WAP etc. features also developed in the later generation of feature phones. Finnish brand Nokia was leading the feature phone market alone at that time. Phones like Nokia 3310, 1100,1110, 3210, 6600, 2600 led the local as well as global scene. Now there are many more brands that are offering decent quality devices with modest pricing. But Nokia still remains the most trustworthy name in this category. Samsung is another reliable name for the bar phone consumers that value consistent quality and durability.


     </h3>
     <h2 className='text-orange-700 text-xl font-bold p-2 rounded-md my-3'>Smartphones :</h2>
     <h3 className='text-white bg-orange-400 p-3 rounded-lg text-lg '>In Mid 20th century, the first generation smartphones arrived in the market. Nokia kept its leading place with its N series smartphones. BlackBerry was another respectable name in the first-generation smartphone years. There were still no touchscreen, apps, etc. and one couldn’t do too many things with those devices. Accessing the internet was slowly getting more popular, but it was still possible only via a much slower GPRS technology since the 3G network arrived in Bangladesh in the year 2012. The first generation smartphones were finely designed with improved camera quality and higher internal storage. Storing photos, Mp3 audio files, MP4 or video files, various ringtones, mobile themes etc. were the main functionalities of those gadgets along with making 2G calls, sending SMS and MMS.
     </h3>

     <h2 className='text-orange-700 text-xl font-bold p-2 rounded-md my-3'>Android Smartphones</h2>

     <h3 className='text-white bg-orange-400 p-3 rounded-lg text-lg '>
     At the end of 2008, the first commercial Android phone was launched by HTC called HTC Dream. Within just one year of its launch, Android started to reshape the market entirely. Although Apple iPhones with iOS, Nokia’s Symbian or BlackBerry OS phones were present in the market, Android phones took the lead with its innovative Android store apps and through the number of possibilities these apps were offering. Android phones started to get attention in Bangladesh after the Launch of 3G network in Q4 2012. Symphony and Samsung were the leading names in the first years of Android in this south-east Asian country. As of February 2022, Android had 70.94% global smartphone market share (according to StatCounter) which is expected to be much higher in Bangladesh. Apple’s iOS was in second position with 28.29% market share.
     </h3>

     <h2 className='text-orange-700 text-3xl font-bold p-2 rounded-md mt-3 mb-2'>More at Phone Bazaar</h2>
     <h3 className=' text-2xl p-2'>
     Mobile gadgets in phoneBazaar.com can be found by brands, price range and so on. A blog section is also there to keep you informed about the latest news from the mobile phone industry. You may also check our where to buy page to get some idea about different buying possibilities.
     </h3>

     <Link to='/'><button className='btn mx-auto'>Back to home page</button></Link>

        </div>
    );
};

export default About;