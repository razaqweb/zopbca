***** Tip for making images fit in the gallery ******

If the images are of different sizes, the gallery will start to not look even. 

To solve this, any images you want to use, replace the img tag inside the gallery-grid-container div with a regular empty div tag. 

Give that div the same height and width as the img tag you're replacing. 

Then use your image as a background-img of the div, with background-size set to "cover" or "contain". Now the image will fit the gallery-img height and width. 

You can also change the position of the image to focus more on center or top or bottom with 'background-position'