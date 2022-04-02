import memeMaker from '@erickwendel/meme-maker';

const options = {
    image: './img/macaco.jpg', // Required
    outfile: './output/macaco.meme.png', // Required
    topText: 'TOP TEXT', // Required
    bottomText: 'BOTTOM TEXT', // Optional
};

memeMaker(options).then(() => {
    console.log('Image saved: ' + options.outfile);
}).catch((error) => console.log(error));
