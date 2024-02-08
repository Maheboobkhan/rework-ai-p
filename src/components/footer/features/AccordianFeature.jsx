import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const accordianData = [
    {
        id: 1,
        title: 'COMPANY',
        content: [
            'How it works',
            'Pricing',
            'Demo',
            'Testimonials'
        ]
    },
    {
        id: 2,
        title: 'RESOURCES',
        content: [
            'Blog post name goes here',
            'Blog post name goes here',
            'Blog post name goes here',
            'See all resources'
        ]
    },
    {
        id: 3,
        title: 'ABOUT',
        content: [
            'Terms & Conditions',
            'Privacy Policy'
        ]
    },
    {
        id: 4,
        title: 'Contacts',
        content: [
            '+91-0987654321',
            'talentfinder@gmail.com'
        ]
    }
];

const AccordianFeature = () => {
    return (
        <div className='w-full bg-transparent'>
            {accordianData.map((section) => (
                <Accordion key={section.id}>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon
                            style={{ color: 'white' }}
                        />}
                        aria-controls={`panel${section.id}-content`}
                        id={`panel${section.id}-header`}
                        style={{ backgroundColor: 'rgb(107 33 168 / var(--tw-bg-opacity))', color: 'white' }}
                    >
                        <Typography className='font-Inter font-[14px]'>{section.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        style={{ backgroundColor: 'rgb(107 33 168 / var(--tw-bg-opacity))', color: 'white' }}
                    >
                        <Typography>
                            {section.content.map((item, index) => (
                                <div key={index} className='hover:underline font-Inter font-[14px]'>{item}</div>
                            ))}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>

    );
}

export default AccordianFeature;
