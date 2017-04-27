# Welcome to my "Make Effective Data Visualization" Project Page!

I completed this project for Udacity's Data Analyst Nanodegree "Data Visualization" course.

During this course of this project, I have learned how to do the following things:

- Demonstrate an ability to choose optimal visual elements to encode data and critically assess the effectiveness of a visualization
- Communicate a story or finding to an appropriate audience using interactive visualizations
- Undergo the iterative process of creating a visualization, and build interactive visualizations with dimple.js and d3.js.

The first draft of my visualization can be found here: https://bl.ocks.org/mmlak-0109/3bc60562b828c6f5fef58b97173330bf

The second draft can be found here: https://bl.ocks.org/mmlak-0109/dc7319d8c4a9df9cdcf393b4c6ada4e4

The current draft can be found here: https://bl.ocks.org/mmlak-0109/877da9bba7ef87f4455bb01d077bed31

Below is a full description of the project.  It includes a summary of the dataset, a discussion on my design decisions, three examples of feedback I received on the project, and feedback from the official reviewer.

Enjoy!

# Make Effective Data Visualization: Baseball

## Summary

The data-set for these visualizations contains 1,157 baseball players.  The player data includes their handedness (right, left, or both), height (in inches), weight (in pounds), batting average, and home runs.  My goal for these visualizations is twofold.  First, to show how the players (grouped by their handedness) compare across their average performance stats.  Second, to show you the relationships between players (grouped by their height and weight) compare across their average performance stats.

## Design

I began my exploration of the data initially in a spreadsheet, but I made my initial plots using dimple.  I began by making one or two scatter plots and bar graphs, but I pretty quickly went ahead and made all the plots I could think of.  After getting all of the charts made individually, I decided I wanted to break the data into two different sections, highlighting different relationships in each section.  From this point on, however, I focused mainly on the technical side of my visualizations, putting off making my graphs explanatory until later.  It was at this point in the development of my visualizations that I asked for feedback from three people.  I adjusted my plots to incorporate almost all of the points of improvement brought up in the feedback, and then, thanks to a reminder to make sure my visualizations tell a story, I refocused my plots and found some key points to highlight.

In the "Average Performance Stats by Handedness" set of plots, I chose bar graphs due to the variables being categorical.  For the "Average Performance Stats by Height/Weight" section, I chose line graphs so that any trends between the performance stats and height and weight could be seen.  I also chose to make the legend interactive to allow viewers to untangle the data by isolating each line.  In addition, while the colors used for the line graphs are dimple's default colors, I chose keep them after playing around with other sets of colors.  I thought that, compared to the other color combinations I tried, they provided the best contrast and had a nice soft tone that is distinct yet easy on the eyes. Finally, my main reason for showing only one set at a time, and one chart within each set at a time, was to keep the visualization page as clean and simple as possible.

## Feedback

### Feedback #1
The first person to provide me feedback was Myles (an always very helpful forum mentor).  He replied to [my post asking for feedback in the forums](https://discussions.udacity.com/t/p6-feedback-request-baseball-data-visualization/241328/2?u=mmlak_0109).  He gave me three suggestions for improving me my visualization.  

1. He pointed out tome that on some browsers my background isn't full screen, and he provided a picture showing me proof.  He then provided me a link to a website that had a tutorial on CSS code that would help to resolve the issue.  The link proved to be very helpful, and I was able to fix the problem.

2. Next he suggested, "Instead of displaying both charts at the start, I think that having a single chart throughout the visualization would look better."  I agreed and replied, in part, "Regarding point number two, I completely agree. That is my end goal, but I haven't been able to find a way to do it."  After some troubleshooting, however, I was able to eventually solve the problem.  I wrote back to Myles explaining how I did it.

  This was my response:

> I had tried to hide the "Data Relationships" set of charts when the page first loads by setting the CSS "display" property for it to "none", but that would cause the chart to display improperly after I clicked on the "Data Relationships" button to make it show up. The chart would be completely compressed up in the top left corner of the "div". I didn't know what caused this problem, but I found the answer through this post. Because the div's display is set to none, it seems that the chart only has a 0px space within which to render the chart. Since clicking on the "Data Relationships" button doesn't redraw the chart but simply makes the previously hidden div display, only the compressed chart will show up.

> At this point, the first idea that came to mind was to alter the function for my buttons so that it would make a call to the charts draw function on each click, but that seemed like a confusing route to take. So after thinking about it a bit more, I thought that simply adding the line document.getElementById ("relationships_row").style.display = "none"; at the end of the charts draw function might solve the problem because this would set the display property to none only after the chart had been drawn. Turns out I was right. That one simple line of code was all I needed.

3. His final response was about dimple's default colors stating, "This is personal preference, but I don't think that dimple's default colors have enough contrast. You can easily change them."  He then provided me with two links.  One showed how to assign colors myself, and the other one showed how to change dimple's default color's.

Later on, while helping me debug the code for my interactive legend, he gave my one last bit of advice as feedback.  He said, "One thing that you will have to think about before you submit is the story that your visualization is telling.  Your visualization will breeze through the technical part of the review process. However, an important part of the process is that your visualization tells a story. (The most commonly used phrase is that visualizations should be 'Explanatory, not Exploratory'). Given the breadth of your visualization, you will have to add some text to your visualization that gives a clear message that your visualization has a central theme/story."  It was at this point that I realized I had almost completely ignored this aspect of my visualizations.  As a result, I refocused my plots to make sure I had clear findings to present.

### Feedback #2
The second person to provide me feedback was Joey, who is a LinkedIn connection and recent graduate of Udaity's Data Analyst Nanodegree Program.  Here is what he pointed out to me as fixes.

1. After a quick initial look-though he said, "I found a bug that the buttons on right side of the "Data Relationships" page keep being highlighted when I clicked on another other one."  I told him that I had noticed that as well, but that I hadn't been able to find the problem yet.  He actually found the bug in my code for me and suggested a fix that might work.  His suggested fix didn't quite work, but thanks to his suggestion I was able to find the right fix and solve the problem.

2. He took the time to have a more thorough look-through later on, and he responded with this:
    
> With Matt's visualized data, I easily got the following information.

> With data breakdown page
> - I got that the majority of players are right handed.
> - Left handed players had the most home runs, and right handed players had the least.
> - Left handed and both handed players have a better batting average than right handed players.
> - There is almost no differences among the players in height and weight.

> With relationships
> - The players with low batting averages had less home runs. But, there is no relationship when batting average is greater than 0.25
> - Height-batting average and weight-batting show that the batting rate between 0.2 to 0.3 is majority.
> - The distributions of Height-homerun and weight-homerun are like a normal distribution, which makes sense that both height and weight have weak relationships with home runs.

> For the design, I like the background that matches the topic of data.  It is not a complicated picture, so my view is not interrupted by it. The introduction at top gives me the basic information of the data, and it's located at a good position so that I can easily review the data with the basic information. Also, the colors are well selected. I feel comfortable when I am observing the data.

> The following are points can be improved 
> - The dash line is not clear because the dots are so crowded. Adding the background color to the dash line may be better.
> - The loading of the relationship page is a little bit slow.
> - The numbers on the x axis for weight are too close together on the weight-homerun plot.

### Feedback #3
The final person to give me feedback was my wife.  Because the first two people have taken the same course as me, they are familiar with the dataset I am using and the visualization techniques being implemented.  As a result, I felt like getting feedback from someone who is unfamiliar with these things would be beneficial, allowing me to get feedback from a much different perspective than the first two people.  The feedback that she gave me centered more on problems she saw in the display of the visualization.

1. The main points she gave were these:
    - Changing the color of the bars in the bar graph would make it easier to identify the handedness.
    - The pop-up info box (tool-tip) is a little small.  It was a bit hard to read the information.
    - The chart labels are a little small.  Also, adding the units of measurement into the labels would make the charts easier to understand.
    - The colors for the bubbles don’t have enough contrast (mainly between the red and yellowish/orange color used for Right handedness and Both handedness.
    - The numbers for weight on the x-axis should be angled for easy reading.
    - If possible, finding a way to make the data points less crowded in the bubble graphs would make things easier to understand.
    - For the “Height-Weight” graph, switching the x and y axis made the graph easier to understand.

### Reviewer Feedback
After submitting my project for an official review, I received the following feedback on some final changes I needed to make to my visualization:

- **Colour coding** - L,R and B are all blue in the bar charts and three different colours in the lines. Could you keep this consistent for both. You're right, you don't need a legend for the bar chart as the bar labels do this for you but you can still apply the colour coding.
- **Buttons - colour** - along the same note, you've used the same colour scheme (blue and orange) for the buttons which is double/triple encoding. Greyscale often works well for buttons, particularly in your case with the bright background photo.
- **Buttons - disabled/enabled** - please make sure it is clear to the reader which chart is selected at all times. "Average Performance Stats by Handedness" and "Total Handedness" should be disabled/selected by default. This would also resolve the rendering error above.
- **L, R, B** - "left", "right", "both" would be so much more accessible?
- **Tooltips** - along the same lines as above "Average" is so much better than "avg".
- **Alignment** - it would be great if you could move the chart to the left a little and the findings/buttons to the right. At the moment there is too much space on the left and too little on the right.

The final draft of my visualization has been changed to reflect all of these suggested changes.

### Citations

- http://scripting.com/2014/03/10/opacityInCssBackgroundImages.html#aITTOO
- https://discussions.udacity.com/t/aggregating-and-manipulating-data-using-dimple-js/184108
- https://discussions.udacity.com/t/call-to-outside-javascript-file-not-wrorking/239949
- https://discussions.udacity.com/t/dynamic-buttons-between-cabin-class-and-sex/177482
- http://bl.ocks.org/Meschreiber/5188e038c6360268a43d2f47dafc8835
- http://bl.ocks.org/ajaydas/79fdc410599e2cae037af679c921cbb6
- http://dimplejs.org/index.html
- https://github.com/PMSI-AlignAlytics/dimple/wiki
- https://github.com/d3/d3/blob/master/API.md
- https://www.w3schools.com/html/default.asp
- https://www.w3schools.com/css/default.asp
- https://www.w3schools.com/js/default.asp
- http://stackoverflow.com/questions/17791926/how-to-rotate-x-axis-text-in-dimple-js
- https://discussions.udacity.com/t/small-problem-with-interactive-legend/242262
- http://stackoverflow.com/questions/2881307/can-i-have-two-javascript-onclick-events-in-one-element
- http://stackoverflow.com/questions/15322556/how-to-remove-an-attribute-in-d3-js
