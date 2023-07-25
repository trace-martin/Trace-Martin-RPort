import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';
import '../styles/Experience.css';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#000000'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2007-2011'
          iconStyle={{background: '#b19ac5', color:"fff"}}
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
          iconStyle={{background: '#b19ac5', color:"fff"}}
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
          iconStyle={{background: '#b19ac5', color:"fff"}}
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
          iconStyle={{background: '#b19ac5', color:"fff"}}
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
        
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2017-2019'
          iconStyle={{background: '#b19ac5', color:"fff"}}
          icon={ <WorkOutlineTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            Denver Green School DPS<br></br>
            Denver, Colorado
          </h3>
          <p>
            Excursion Coordinator/Physical Education Teacher
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2017-2019'
          iconStyle={{background: '#b19ac5', color:"fff"}}
          icon={ <WorkOutlineTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            Columbine Elementary DPS<br></br>
            Denver, Colorado
          </h3>
          <p>
            Physical Education Teacher
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2017-2019'
          iconStyle={{background: '#b19ac5', color:"fff"}}
          icon={ <SchoolTwoToneIcon /> }
        >
          <h3 className='vertical-timeline-element-title'> 
            University of Denver<br></br>
            Denver, Colorado
          </h3>
          <p>
            Full Stack Web Developer bootcamp (12 weeks)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience