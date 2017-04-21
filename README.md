# Welcome to my "Make Effective Data Visualization" Project Page!

I will complete this project for Udacity's Data Analyst Nanodegree "Data Visualization" course.

By the end of this course and project, I will have learned how to do the following things:

- Demonstrate an ability to choose optimal visual elements to encode data and critically assess the effectiveness of a visualization
- Communicate a story or finding to an appropriate audience using interactive visualizations
- Undergo the iterative process of creating a visualization, and build interactive visualizations with dimple.js or d3.js.

The current draft of my visualization can be found here: https://bl.ocks.org/mmlak-0109/3bc60562b828c6f5fef58b97173330bf

Below is a full description of the project.  It includes a summary or the dataset, a discussion on my design decisions, and three examples of feedback I recieved on the project.

Enjoy!





# Make Effective Data Visualization: Baseball

## Summary

The data-set for these visualizations contain 1,157 baseball players.  The player data includes their handedness (right, left, or both), height (in inches), weight (in pounds), batting average, and home runs.  My goal for these visualizations are twofold.  First, to give you an overview of the data by showing how the players (grouped by their handedness) compare across their stats.  Second, to show you the relationships between the stats.

## Design



## Feedback

### Feedback #1
The first person to provide me feedback was Myles (an always very helpful forum mentor).  He replied to [my post asking for feedback in the forums](https://discussions.udacity.com/t/p6-feedback-request-baseball-data-visualization/241328/2?u=mmlak_0109).  He gave me three suggestions for improving me my visualization.  

1. He pointed out tome that on some browsers my background isn't full screen, and he provided a picture showing me proof.  He then provided me a link to a website that had a tutorial on CSS code that would help to resolve the issue.  The link proved to be very helpful, and I was able to fix the problem.

2. Next he suggested, "Instead of displaying both charts at the start, I think that having a single chart throughout the visualization would look better."  I agreed and replied, in part, "Regarding point number two, I completely agree. That is my end goal, but I haven't been able to find a way to do it."  After some troubleshooting, however, I was able to eventually solve the problem.  I wrote back to Myles explaining how I did it.  This was my response:
> I had tried to hide the "Data Relationships" set of charts when the page first loads by setting the CSS "display" property for it to "none", but that would cause the chart to display improperly after I clicked on the "Data Relationships" button to make it show up. The chart would be completely compressed up in the top left corner of the "div". I didn't know what caused this problem, but I found the answer through this post. Because the div's display is set to none, it seems that the chart only has a 0px space within which to render the chart. Since clicking on the "Data Relationships" button doesn't redraw the chart but simply makes the previously hidden div display, only the compressed chart will show up.

> At this point, the first idea that came to mind was to alter the function for my buttons so that it would make a call to the charts draw function on each click, but that seemed like a confusing route to take. So after thinking about it a bit more, I thought that simply adding the line document.getElementById ("relationships_row").style.display = "none"; at the end of the charts draw function might solve the problem because this would set the display property to none only after the chart had been drawn. Turns out I was right. That one simple line of code was all I needed.

3. His final response was about dimple's default colors stating, "This is personal preference, but I don't think that dimple's default colors have enough contrast. You can easily change them."  He then provided me with two links.  One showed how to assign colors myself, and the other one showed how to change dimple's default color's.  I ended up not implementing this suggestion, as I felt the default colors provided enough contrast.

### Feedback #2
The second person to provide me feedback was Joey, who is a LinkedIn connection and recent graduate of Udaity's Data Analyst Nanodegree Program.  Here is what he pointed out to me as fixes.

1. First he said, "I found a bug that the buttons on right side of the "Data Relationships" page keep being highlighted when I clicked on another other one."  I told him that I had noticed that as well, but that I hadn't been able to find the problem yet.  He actually found the bug in my cod for me and suggested a fix that might work.  His suggested fix didn't work, but it was almost what I needed.  Thanks to his suggestion I was able to find the right fix and could solve the problem.

With Matt's visualized data, I easily got the following information.

With data breakdown page
1. I got the majority is right handed players.
2. Left handed players perform home run most. And right handed players perform least
3. left hand and both handed players have better batting rate than right handed players 
4. There is almost no differences among the players in height and weight.

With relationships
1. The players with low batting rate perform less home run. But it becomes no relationship when batting rate is greater than 0.25
2. Height-batting average and weight-batting show that the batting rate between 0.2 to 0.3 is majority.
3. The distributions of Height-homerun and weight-homerun are like a normal distribution, which make sense that both height and weight have weak relationships with home run

For the design, I like the background that matches the topic of data and it is not a complicated picture so that my view is not interrupted by. The introduction at top gives me the basic information of the data. And it locates at a good position so that I can easily review the data with the basic information. Besides, the colors are also well selected. I feel comfortable when I am observing the data.

The follows are points can be improved 
1. The dash line is not clear because the dots are so crowned. Adding the background color to the dash line may be better
2. The loading of relationship page is a little bit heavy
3. The number of x axis of weight is too closed on weight-homerun plot. 

### Feedback #3
The final person to give me feedback was my wife.  Because the first two people have taken the same course as me, they are familiar with the dataset I am using and the visualization techniques being implimented.  As a result, I felt like getting feedback from someone who is unfomiliar with these things would be benificial, allowing me to get feedback from a much different perspective than the first two people.  The feedback that she gave me centered more on problems she saw in the display of the visualization.

1. First she gave 

My Wife's Feedback

What are some improvements you think I can make?

- Change the color of the bar graph
- Pop up info box is a little small
- Make chart labels bigger and add the units of measure into the labels.
- Colors for the bubbles don’t have enough contrast.  Should change them.
- Angle the numbers on the x-axis for easy reading
- Find a way to make the data points less crowded in the bubble graphs.
- Switch x and y axis for “Height-Weight” graph.
