import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2007-2011'
          iconStyle={{background: '#3e497a', color:"fff"}}
          icon={ <SchoolTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            Granbury High School<br></br>
            Granbury, Texas
          </h3>
          <p>
            High School Deploma
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2011-2015'
          iconStyle={{background: '#3e497a', color:"fff"}}
          icon={ <SchoolTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            Sam Houston State University<br></br>
            Huntsville, Texas
          </h3>
          <p>
            BS Criminal Justice <br></br>
            Minor Buisness
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2017-2019'
          iconStyle={{background: '#3e497a', color:"fff"}}
          icon={ <WorkOutlineTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            Sulphur Springs ISD<br></br>
            Sulphur Springs, Texas
          </h3>
          <p>
            Physical Education Teacher/Coach
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2019-2020'
          iconStyle={{background: '#3e497a', color:"fff"}}
          icon={ <WorkOutlineTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            China Spring ISD<br></br>
            China Spring, Texas
          </h3>
          <p>
          Physical Education Teacher/Coach
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience