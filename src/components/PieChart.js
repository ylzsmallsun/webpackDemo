import React, {Component} from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.setPieOption = this.setPieOption.bind(this);
    this.initPie = this.initPie.bind(this);
  }
  componentDidMount() {
    this.initPie();
  }
  initPie() {
    let myChart = echarts.init(this.refs.pieChart1);
    let options = this.setPieOption();
    myChart.setOption(options);
  }
  setPieOption() {
    return {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
          orient: 'vertical',
          x: 'left',
          data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
      },
      series: [
          {
              name:'访问来源',
              type:'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {value:335, name:'直接访问'},
                  {value:310, name:'邮件营销'},
                  {value:234, name:'联盟广告'},
                  {value:135, name:'视频广告'},
                  {value:688, name:'搜索引擎'}
              ]
          }
      ]
    };
  }
  render() {
    return (
      <div className="pieChart">
        <div ref="pieChart1" style={{width: "500px", height: "400px"}}>
        </div>
      </div>
    )
  }
}
export default PieChart;
