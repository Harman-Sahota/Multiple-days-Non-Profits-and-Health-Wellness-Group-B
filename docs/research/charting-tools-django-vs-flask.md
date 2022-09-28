## CHARTING TOOLS

### Django

- [ ] Chart.JS
- [ ] D3.JS
- [ ] wq.app
- [ ] wq.db

---

### Flask

- [ ] Chart.JS
- [ ] D3.JS
- [ ] Chartist.JS
- [ ] Matplotlib
- [ ] Plotly.py - Powered by Plotly.JS
- [ ] Highcharts

---

### Discussion

> As a result of my analysis, I have come to a conclusion that D3.js and Chart.js are worth comparing to evaluate which would be better for the project.

| PARAMETERS          | D3.js                                                                                                                        | Chart.js                                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Learning Curve**  | Significantly Steeper Learning Curve                                                                                         | Gentle Learning Curve                                                                                                                      |
| **Graphic Quality** | Integrates HTML, CSS and SVG, giving you data-driven graphics. Responsive and no loss in clarity across varying resolutions. | Uses HTML canvas element, which produces **impoverished** bitmapped graphics. Responsive though loss in clarity with changing resolutions. |
| **Loading speed**   | Slower and more susceptible to device limitations                                                                            | Fast and slick on more or less any device                                                                                                  |
| **Customization**   | We can create any graphs we want since there aren't any predefined graphs                                                    | Has predefined limited variety of graphs                                                                                                   |
| **Input**           | Requires coding different aspects such as the interactivity, responsiveness and legend                                       | Requires declaring required inputs to generate charts                                                                                      |

---

### FINAL VERDICT

#### 1. Time - Urgency

- > **Ample Time** - D3.js
  > Since it takes more time to learn D3.js and to code the logic that generates the graphs

- > **Less Time** - Chart.js
  > Since it takes less time to learn the ins and outs of Chart.js

#### 2. Variety

- > **Less Variety** - Chart.js
  > If all someone needs to do is generate graph types: bar, line, area, scatter, radar, and pie

- > **More Variety** - D3.js
  > These are some graph types that can not be done with Chart.js: violin, boxplot, ridgeline, heatmap, correlogram, bubble (2D), wordcloud, lollipop, treemap, dendogram, maps, sankey, and edge bundling
  > **This list is not exhaustive**

#### 3. Customization - Control

- > **Less Customization** - Chart.js
  > Here all one has to do is paste the code from the official documentation for the required chart type, into their HTML or React render function. After this, add the data to the given fields

- > **More Customization** - D3.js
  > Things like creating the x-axis, the y-axis, the path, the legend, the labels, responsiveness and interactivity are all up to the user. After this, ensuring all these work well together is another part of the battle. Thankfully, there is ample documentation and support for all of this

---
