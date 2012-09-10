Title: Simple Water Calculator
Author: Charles Howard
Date: 2012-08-01 12:00


A few months ago I got interested in the water chemistry of brewing, a subject at I have always avoided. When I first started brewing I would add some Gypsum every now and then not really knowing what it did, or how much to use.  

I believe the turning point for me was a 
[video](http://www.northernbrewer.com/connect/2012/06/john-palmer-on-residual-alkalinity-brewing-water/)
a friend of mine (Sean Patronis) shared with me of a talk on the subject by John Palmer.
After some more research I figured out why I always had problems with water calculators I have used in the past, they try to match water profiles instead of the effect of the water profile.  

Other water calculators I have seen take in the salts to add and then show how close you are to a target profile along with showing any warnings for high ion levels. For my most common scenario this is not very helpful.  Instead I would like to enter information on the beer I am brewing which I know without any chemistry knownledge and have the calculator provide me with the salts to add.  So after feeling that I had learned enough I set out to build one.

## The Water Calculator

There are two factors to a water profile I am interested in: Residual Alkalinity (RA) and the Chloride to Sulfate Ratio.  Both of these factors can be roughly determined from the beer style.  A proof-of-concept version of my water calculator is below.  A lot of work still needs to be done, but I have already found it quite useful for my last few brews.

<div style="color:#c41; text-align:center;margin-bottom:1em;">Proof of Concept &ndash; use at your own risk!</div>

<div class="simple-water-calculator">
	<div style="text-align:center;color:#55a;margin:1em 0;">Using Tallahassee Water</div>
	<div style="margin:0 0 1em 0;">
		<label>Volume of Water to Adjust (gallons)</label>
		<input name="volume" type="text" size="5" value="14" />
	</div>
	<div class="water-selection"></div>
	<div class="sliders">
		<div class="slider-info srm-slider-info ui-helper-clearfix">
			<div class="srm-value"></div>
			<div class="ra-value"></div>
			<div class="srm-color"></div>
		</div>
		<div class="slider srm-slider"></div>

		<div style="height:50px;"></div>

		<div class="slider-info ratio-slider-info ui-helper-clearfix">
			<div class="value"></div>
			<div class="description"></div>
		</div>
		<div class="slider malt-balance-slider"></div>
	</div>
	<div class="result">

	</div>
</div>
<link rel="stylesheet" href="simple-water-calculator-alpha/simpleWater.css?v=1.0">
<script src="lib/jquery-1.7.2.min.js"></script>
<script src="lib/jquery-ui-1.8.21.min.js"></script>
<script src="lib/jquery.tmpl.min.js"></script>
<link rel="stylesheet" href="lib/Aristo.css">
<script src="simple-water-calculator-alpha/brewcalc.js"></script>
<script src="simple-water-calculator-alpha/simpleWater.js"></script>
<script id="waterProfileForm" type="text/x-jquery-tmpl">
	<form>
		<label></label>
		<input>
	</form>
</script>

To use the calculator enter the about of water you need to treat, then select the beer color you are brewing using the top slider and then select the bitter/malty balance of your brewing water with the next slider. As you change the input parameters the CaSO (Gypsum) and CaCl (Calcium Chloride) amounts to add are adjusted below.

All source code is part of the jsBrewCalc project and can be found on [github](http://github.com/frodare/jsBrewCalc).


## Planed Improvements

The current state of this calculator is pretty rough.  There are many bugs I need to fix when I get the time along with many features I want to add.  Here is a list of what I am currently planning to add:

1. Fix bugs, cleanup proof-of-concept code
1. latic acid adjustments
1. allow decreasing RA with Calcium Carbonate adjustments
1. Magnesium Sulfate adjustments for low levels of Mg
1. high ion level warnings
1. custom starting water profile
