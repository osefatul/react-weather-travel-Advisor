# Weather & Travel Advisor

We are using two APIs from [RapidAPI](https://rapidapi.com/hub?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
1 - [Travel Advisor API](https://rapidapi.com/apidojo/api/travel-advisor?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)
2- [OpenWeatherMap API](https://rapidapi.com/community/api/open-weather-map?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel)

### Material UI

#### AP.js

We used [grid and layout](https://mui.com/components/grid/) from material ui for responsive design and positioning. For revising flex and layout container jsut visit [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

Grid has 12 columns layout in one line or viewpoint.

In material Grid the first Grid is used to indicate that it is container. spacing means the width the grid gonna take.
The second Grid indicates the items -
xs={12}: means in small devices the component will take whole line or all 12 columsn layout.
md={4}: means in medium/large devices the component will take 4 out 12 column layout

- the new material ui may have some bugs, however you need to install these tow libraries as well along with material ui.
  -npm install @emotion/react
  -npm install @emotion/styled

#### Header.js

CssBaseline - will provide a lot of default material ui css styles

`AppBar` - simply a navigation bar
`Toolbar`- the blue line in the navigation bar.
`Typography` - a line of text
`Box` - is simply a div
`InputBase` - is just an input
