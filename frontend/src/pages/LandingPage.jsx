import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  Button,
  Container,
  Card,
  AppBar,
  Toolbar,
  Stack,
} from '@mui/material';

import {
  Create as CreateIcon,
  Timeline as TimelineIcon,
  Schedule as ScheduleIcon,
  Bolt as BoltIcon,
  Layers as LayersIcon,
} from '@mui/icons-material';

const CartoonRobot = () => (
    <Box
        sx={{
          width: 180,
          height: 180,
          position: 'relative',
          animation: 'floatRobot 4s ease-in-out infinite',

          '@keyframes floatRobot': {
            '0%, 100%': {
              transform: 'translateY(0) rotate(0deg)',
            },
            '50%': {
              transform: 'translateY(-12px) rotate(2deg)',
            },
          },
        }}
    >
      <svg
          width="180"
          height="180"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <rect
            x="95"
            y="20"
            width="10"
            height="20"
            rx="3"
            fill="#8b5cf6"
        />

        <circle
            cx="100"
            cy="15"
            r="8"
            fill="#ec4899"
        />

        <rect
            x="40"
            y="65"
            width="15"
            height="30"
            rx="5"
            fill="#4c1d95"
        />

        <rect
            x="145"
            y="65"
            width="15"
            height="30"
            rx="5"
            fill="#4c1d95"
        />

        <rect
            x="50"
            y="40"
            width="100"
            height="70"
            rx="20"
            fill="url(#headGrad)"
            stroke="#8b5cf6"
            strokeWidth="3"
        />

        <rect
            x="65"
            y="52"
            width="70"
            height="42"
            rx="10"
            fill="#0f0f1d"
            stroke="#a78bfa"
            strokeWidth="1.5"
        />

        <circle
            cx="85"
            cy="72"
            r="7"
            fill="#a78bfa"
        />

        <circle
            cx="115"
            cy="72"
            r="7"
            fill="#a78bfa"
        />

        <path
            d="M 85 85 Q 100 95 115 85"
            stroke="#f0eeff"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
        />

        <rect
            x="88"
            y="110"
            width="24"
            height="15"
            fill="#6d28d9"
        />

        <rect
            x="60"
            y="125"
            width="80"
            height="65"
            rx="15"
            fill="url(#bodyGrad)"
            stroke="#8b5cf6"
            strokeWidth="3"
        />

        <rect
            x="75"
            y="137"
            width="50"
            height="40"
            rx="6"
            fill="#1e1b4b"
        />

        <path
            d="M 80 157 L 92 157 L 96 145 L 102 169 L 106 157 L 120 157"
            stroke="#10b981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />

        <rect
            x="35"
            y="130"
            width="18"
            height="35"
            rx="9"
            fill="#4c1d95"
        />

        <rect
            x="147"
            y="130"
            width="18"
            height="35"
            rx="9"
            fill="#4c1d95"
        />

        <defs>
          <linearGradient
              id="headGrad"
              x1="50"
              y1="40"
              x2="150"
              y2="110"
              gradientUnits="userSpaceOnUse"
          >
            <stop
                offset="0%"
                stopColor="#1e1e38"
            />

            <stop
                offset="100%"
                stopColor="#090915"
            />
          </linearGradient>

          <linearGradient
              id="bodyGrad"
              x1="60"
              y1="125"
              x2="140"
              y2="190"
              gradientUnits="userSpaceOnUse"
          >
            <stop
                offset="0%"
                stopColor="#1e1e38"
            />

            <stop
                offset="100%"
                stopColor="#090915"
            />
          </linearGradient>
        </defs>
      </svg>
    </Box>
);

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'AI Blog Generation',
      desc: 'Generate complete SEO-optimized articles from just a topic, with structured sections, outlines, FAQs and meta tags.',
      icon: (
          <CreateIcon
              sx={{
                fontSize: 40,
                color: '#8b5cf6',
              }}
          />
      ),
    },

    {
      title: 'Rich Editor & AI Actions',
      desc: 'Edit blog posts in an interactive rich text editor with inline AI actions to rewrite, expand, shorten, or fix grammar.',
      icon: (
          <LayersIcon
              sx={{
                fontSize: 40,
                color: '#34d399',
              }}
          />
      ),
    },

    {
      title: 'Algorithmic SEO Report',
      desc: 'Analyze content keyword density, readability scores, and heading structure with automated fix recommendations.',
      icon: (
          <BoltIcon
              sx={{
                fontSize: 40,
                color: '#fbbf24',
              }}
          />
      ),
    },

    {
      title: 'Content Auto-Publish Scheduler',
      desc: 'Organize drafts and set automated cron-based auto-publishing times to keep your content flowing.',
      icon: (
          <ScheduleIcon
              sx={{
                fontSize: 40,
                color: '#8b5cf6',
              }}
          />
      ),
    },

    {
      title: 'Social Media & Email Copy',
      desc: 'Instantly generate optimized social posts for LinkedIn, Twitter, and Facebook, plus newsletters directly from your articles.',
      icon: (
          <TimelineIcon
              sx={{
                fontSize: 40,
                color: '#34d399',
              }}
          />
      ),
    },

    {
      title: 'Multi-Tenant Workspaces',
      desc: 'Organize articles and team roles into separate projects. Invite collaborators with editor or viewer permissions.',
      icon: (
          <BoltIcon
              sx={{
                fontSize: 40,
                color: '#fbbf24',
              }}
          />
      ),
    },
  ];

  return (
      <Box
          sx={{
            minHeight: '100vh',
            bgcolor: '#000000',
            color: '#f0eeff',
            overflowX: 'hidden',
          }}
      >

        {/* ================= NAVBAR ================= */}

        <AppBar
            position="static"
            sx={{
              background: 'transparent',
              borderBottom: 'none',
              boxShadow: 'none',
            }}
        >
          <Container maxWidth="lg">
            <Toolbar
                sx={{
                  justifyContent: 'space-between',
                  px: '0 !important',
                }}
            >

              <Typography
                  variant="h6"
                  className="text-gradient"
                  sx={{
                    fontWeight: 800,
                    fontFamily: 'Sora',
                  }}
              >
                AI Content Studio
              </Typography>

              <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
              >
                <Button
                    color="inherit"
                    onClick={() => navigate('/login')}
                >
                  Sign In
                </Button>

                <Button
                    variant="contained"
                    className="btn-brand"
                    onClick={() => navigate('/register')}
                >
                  Get Started
                </Button>
              </Stack>

            </Toolbar>
          </Container>
        </AppBar>

        {/* ================= HERO SECTION ================= */}

        <Container
            maxWidth="lg"
            sx={{
              pt: {
                xs: 6,
                md: 10,
              },

              pb: {
                xs: 8,
                md: 10,
              },

              textAlign: 'center',
            }}
        >

          <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mb: 4,
              }}
          >
            <CartoonRobot />
          </Box>

          <Box
              sx={{
                maxWidth: 800,
                mx: 'auto',
                mb: 6,
              }}
          >

            <Typography
                variant="h1"
                sx={{
                  fontFamily: 'Sora',
                  fontWeight: 800,
                  lineHeight: 1.2,
                  mb: 3,
                }}
            >
              Supercharge Your Workflow with{' '}

              <span className="text-gradient">
              Enterprise AI Content
            </span>
            </Typography>

            <Typography
                variant="h5"
                sx={{
                  color: '#a8a3c4',
                  fontWeight: 400,
                  mb: 4,
                  lineHeight: 1.6,
                }}
            >
              The complete SaaS content engine for marketing teams.
              Generate SEO-optimized blog posts, publish automatically
              on schedules, and draft social posts on-demand.
            </Typography>

            <Stack
                direction={{
                  xs: 'column',
                  sm: 'row',
                }}
                spacing={2}
                justifyContent="center"
                alignItems="stretch"
                sx={{
                  width: '100%',
                  maxWidth: 520,
                  mx: 'auto',
                }}
            >

              <Button
                  variant="contained"
                  size="large"
                  className="btn-brand"
                  onClick={() => navigate('/register')}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    height: 56,
                    px: 3,
                    fontSize: '1rem',
                  }}
              >
                Start Generating for Free
              </Button>

              <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    height: 56,
                    px: 3,
                    fontSize: '1rem',
                    color: '#f0eeff',
                    borderColor:
                        'rgba(240, 238, 255, 0.3)',

                    '&:hover': {
                      borderColor: '#8b5cf6',
                      backgroundColor:
                          'rgba(139, 92, 246, 0.08)',
                    },
                  }}
              >
                Sign In to Platform
              </Button>

            </Stack>

          </Box>

        </Container>

        {/* ================= FEATURES SECTION ================= */}

        <Box
            sx={{
              bgcolor: '#030303',
              py: 10,
            }}
        >

          <Container maxWidth="lg">

            <Box
                sx={{
                  textAlign: 'center',
                  mb: 8,
                }}
            >

              <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Sora',
                    fontWeight: 800,
                    mb: 2,
                  }}
              >
                Built for High-Growth Creator Teams
              </Typography>

              <Typography
                  variant="body1"
                  sx={{
                    color: '#a8a3c4',
                    maxWidth: 600,
                    mx: 'auto',
                  }}
              >
                Everything you need to write, optimize, schedule,
                and distribute content at scale without limits.
              </Typography>

            </Box>

            <Box
                sx={{
                  display: 'grid',

                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, minmax(0, 1fr))',
                    md: 'repeat(3, minmax(0, 1fr))',
                  },

                  gap: 4,
                }}
            >

              {features.map((feat) => (

                  <Card
                      key={feat.title}
                      className="card-neon"
                      sx={{
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                        bgcolor: '#101010',
                      }}
                  >

                    <Box>
                      {feat.icon}
                    </Box>

                    <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          fontFamily: 'Sora',
                        }}
                    >
                      {feat.title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                          color: '#a8a3c4',
                          lineHeight: 1.7,
                        }}
                    >
                      {feat.desc}
                    </Typography>

                  </Card>

              ))}

            </Box>

          </Container>

        </Box>

        {/* ================= CTA SECTION ================= */}

        <Box
            sx={{
              bgcolor: '#000000',
              py: {
                xs: 7,
                md: 10,
              },
              px: {
                xs: 2,
                md: 3,
              },
            }}
        >

          <Container maxWidth="lg">

            <Card
                sx={{
                  width: '100%',
                  maxWidth: '1100px',
                  mx: 'auto',

                  p: {
                    xs: 4,
                    md: 7,
                  },

                  textAlign: 'center',

                  background:
                      'linear-gradient(135deg, #11101c 0%, #18142b 100%)',

                  border:
                      '1px solid rgba(139, 92, 246, 0.2)',

                  borderRadius: '24px',

                  boxShadow:
                      '0 20px 60px rgba(0,0,0,0.45)',
                }}
            >

              <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Sora',
                    fontWeight: 800,
                    mb: 2,

                    fontSize: {
                      xs: '2rem',
                      md: '2.75rem',
                    },
                  }}
              >
                Ready to scale your content engine?
              </Typography>

              <Typography
                  variant="body1"
                  sx={{
                    color: '#a8a3c4',
                    mb: 4,
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.7,
                  }}
              >
                Create drafts, optimize for keywords instantly,
                and publish to channels automatically using Groq
                & Ollama Llama models.
              </Typography>

              <Button
                  variant="contained"
                  size="large"
                  className="btn-brand"
                  onClick={() => navigate('/register')}
                  sx={{
                    width: {
                      xs: '100%',
                      sm: '250px',
                    },

                    minHeight: 58,
                    px: 5,
                    py: 2,
                    borderRadius: '12px',
                    fontSize: '1rem',
                  }}
              >
                Create Your Free Account
              </Button>

            </Card>

          </Container>

        </Box>

      </Box>
  );
};

export default LandingPage;