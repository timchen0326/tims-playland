"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Container, Typography, Paper, List, ListItem, ListItemText, Box, Grid, Chip } from '@mui/material';
import dynamic from 'next/dynamic';
import axios from 'axios';

const JsonEditor = dynamic(() => import('json-edit-react').then(mod => mod.JsonEditor), { ssr: false });

type SearchFilterType = "value" | "key" | "all" | undefined;

const sectionTitleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  borderBottom: '2px solid #3f51b5',
  paddingBottom: '10px',
};

const subSectionTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
  color: '#3f51b5',
};

const chipStyle = {
  margin: '5px',
  backgroundColor: '#e0e0e0',
};

const ResumeSection = ({ title, children }: any) => (
  <Box mb={4}>
    <Typography variant="h5" style={sectionTitleStyle}>{title}</Typography>
    {children}
  </Box>
);

const About = () => {
  const router = useRouter();
  const [userId, setUserId] = useState('');
  const [resumeData, setResumeData] = useState<any>(null);
  const [showArrayIndices, setShowArrayIndices] = useState(true);
  const [indent, setIndent] = useState(2);
  const [searchText, setSearchText] = useState('');
  const [searchFilter, setSearchFilter] = useState<SearchFilterType>('all');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const value = window.localStorage.getItem("userId") ?? '';
      setUserId(value);
    }
    fetchResumeData();
  }, []);

  const fetchResumeData = async () => {
    try {
      const response = await axios.get('https://samplejson.onrender.com/api/data');
      setResumeData(response.data);
    } catch (error) {
      console.error('Error fetching resume data:', error);
    }
  };

  const handleClick = () => {
    router.push('/about/sally');
  };

  const handleUpdate = async ({ newData }: any) => {
    try {
      await axios.post('https://samplejson.onrender.com/api/save', newData);
      setResumeData(newData);
    } catch (error) {
      console.error('Error saving resume data:', error);
    }
  };

  const handleReset = () => {
    fetchResumeData();
  };

  const toggleArrayIndices = () => {
    setShowArrayIndices(prevState => !prevState);
  };

  const increaseIndent = () => {
    setIndent(prevIndent => prevIndent + 1);
  };

  const decreaseIndent = () => {
    setIndent(prevIndent => (prevIndent > 1 ? prevIndent - 1 : 1));
  };

  if (!resumeData) return <div>Loading...</div>;

  return (
    (userId === "timchen0326" || userId === "sallytsai0620") ? (
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        style={{
          backgroundColor: '#3f51b5',
          color: 'white',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '24px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.3s ease',
          marginTop: '20px',
        }}
      >
        About Sally
      </Button>
    ) : (
      <Container maxWidth="lg" style={{ padding: '40px', fontFamily: 'Roboto, sans-serif', marginTop: '40px' }}>
        <Paper elevation={3} style={{ padding: '40px', backgroundColor: '#ffffff', color: '#333', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center" mb={4}>
                <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>{resumeData.name}</Typography>
                <Typography variant="body1">{resumeData.contact.address}</Typography>
                <Typography variant="body1">{resumeData.contact.city}</Typography>
                <Typography variant="body1">{resumeData.contact.phone}</Typography>
                <Typography variant="body1">{resumeData.contact.email}</Typography>
              </Box>

              <ResumeSection title="QUALIFICATIONS">
                <Box display="flex" flexWrap="wrap" justifyContent="center">
                  {resumeData.qualifications.map((skill: string, index: number) => (
                    <Chip key={index} label={skill} style={chipStyle} />
                  ))}
                </Box>
              </ResumeSection>
            </Grid>

            <Grid item xs={12} md={8}>
              <ResumeSection title="EDUCATION">
                {resumeData.education.map((edu: any, index: number) => (
                  <Box key={index} mb={2}>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{edu.school}</Typography>
                    <Typography variant="body2">{`${edu.location} | ${edu.date}`}</Typography>
                    {Array.isArray(edu.degrees) ? edu.degrees.map((degree: string, idx: number) => (
                      <Typography key={idx} variant="body2">{degree}</Typography>
                    )) : (
                      <Typography variant="body2">{edu.degree}</Typography>
                    )}
                  </Box>
                ))}
              </ResumeSection>

              <ResumeSection title="CERTIFICATES">
                {resumeData.certificates.map((cert: any, index: number) => (
                  <Typography key={index} variant="body1">{`${cert.name} - ${cert.issuer} ${cert.date}`}</Typography>
                ))}
              </ResumeSection>

              <ResumeSection title="RELEVANT SKILLS & EXPERIENCES">
                <Typography variant="h6" style={subSectionTitleStyle}>LEADERSHIP & TEAMWORK</Typography>
                <List>
                  {resumeData.skills.leadership.map((item: string, index: number) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" style={subSectionTitleStyle}>ORGANIZATION</Typography>
                <List>
                  {resumeData.skills.organization.map((item: string, index: number) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>

                <Typography variant="h6" style={subSectionTitleStyle}>CREATIVITY</Typography>
                <List>
                  {resumeData.skills.creativity.map((item: string, index: number) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </ResumeSection>

              <ResumeSection title="EMPLOYMENT HISTORY">
                {resumeData.employment.map((job: any, index: number) => (
                  <Box key={index} mb={1}>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{job.position}</Typography>
                    <Typography variant="body2">{`${job.company}, ${job.location} | ${job.date}`}</Typography>
                  </Box>
                ))}
              </ResumeSection>

              <ResumeSection title="VOLUNTEER EXPERIENCE">
                {resumeData.volunteer.map((vol: any, index: number) => (
                  <Box key={index} mb={1}>
                    <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{vol.position}</Typography>
                    <Typography variant="body2">{`${vol.organization}, ${vol.location} | ${vol.date}`}</Typography>
                  </Box>
                ))}
              </ResumeSection>
            </Grid>
            {/* <Grid item xs={12}>
              <div style={{ marginBottom: '20px' }}>
                <Typography variant="h5" style={sectionTitleStyle}>Resume Data Editor</Typography>
                <div style={{ marginBottom: '10px' }}>
                  <Button onClick={handleReset} variant="outlined" style={{ marginRight: '10px' }}>Reset Data</Button>
                  <Button onClick={toggleArrayIndices} variant="outlined" style={{ marginRight: '10px' }}>
                    {showArrayIndices ? 'Hide Array Indices' : 'Show Array Indices'}
                  </Button>
                  <Button onClick={increaseIndent} variant="outlined" style={{ marginRight: '10px' }}>Increase Indent</Button>
                  <Button onClick={decreaseIndent} variant="outlined">Decrease Indent</Button>
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search JSON..."
                    style={{ marginRight: '10px', padding: '5px' }}
                  />
                  <select
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value as SearchFilterType)}
                    style={{ padding: '5px' }}
                  >
                    <option value="all">Search All</option>
                    <option value="key">Search Keys</option>
                    <option value="value">Search Values</option>
                  </select>
                </div>
                <JsonEditor
                  data={resumeData}
                  onUpdate={handleUpdate}
                  showArrayIndices={showArrayIndices}
                  indent={indent}
                  searchText={searchText}
                  searchFilter={searchFilter}
                  restrictDelete={true}
                  minWidth="100%"
                  maxWidth="100%"
                  rootFontSize="14px"
                />
              </div>
            </Grid> */}
          </Grid>
        </Paper>
      </Container>
    )
  );
};

export default About;