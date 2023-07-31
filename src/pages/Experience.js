import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import WorkOutlineTwoToneIcon from '@mui/icons-material/WorkOutlineTwoTone';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#000000'>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='February 2023-August 2023'
            iconStyle={{background: '#b19ac5', color:"fff"}}
            icon={ <SchoolTwoToneIcon /> }
          >
            <h3 className='vertical-timeline-element-title'> 
              University of Denver<br></br>
              Denver, Colorado
            </h3>
            <p>
              Full Stack Web Developer bootcamp
            </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='August 2022- August 2023'
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
          date='2019-2022'
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
          date='2018-2019'
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
          date='2016-2018'
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
      </VerticalTimeline>
    </div>
  )
}

export default Experience