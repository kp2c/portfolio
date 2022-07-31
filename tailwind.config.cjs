const config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {}
    },

    plugins: [
        require('tailwindcss-themer')({
            themes: [
                {
                    name: 'dark',
                    extend: {
                        colors: {
                            primary: '#E4E4E7',
                            secondary: '#FAFAFA',
                            light: '#D4D4D8',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        },
                        backgroundColor: {
                            primary: '#27272A',
                            secondary: '#71717A',
                            track: '#3F3F46',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        },
                        backgroundImage: {
                            primary: 'none',
                        },
                        fill: {
                            primary: '#E4E4E7',
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        },
                        boxShadowColor: {
                            primary: '#18181B'
                        },
                        borderColor: {
                            accent: {
                                DEFAULT: '#881337',
                                contrast: '#E4E4E7'
                            }
                        }
                    }
                },
                {
                    name: 'light',
                    extend: {
                        colors: {
                            primary: '#27272A',
                            secondary: '#27272A',
                            light: '#52525B',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        },
                        backgroundColor: {
                            primary: '#E4E4E7',
                            secondary: '#FAFAFA',
                            track: '#6B7280',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        },
                        backgroundImage: {
                            primary: 'none',
                        },
                        fill: {
                            primary: '#27272A',
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        },
                        boxShadowColor: {
                            primary: '#D4D4D8'
                        },
                        borderColor: {
                            accent: {
                                DEFAULT: '#BE123C',
                                contrast: '#F4F4F5'
                            }
                        }
                    }
                },
                {
                    name: 'bw',
                    extend: {
                        colors: {
                            primary: '#3F3F46',
                            secondary: '#18181B',
                            light: '#71717A',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        },
                        backgroundColor: {
                            primary: '#F4F4F5',
                            secondary: '#D4D4D8',
                            track: '#71717A',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        },
                        backgroundImage: {
                            primary: 'none',
                        },
                        fill: {
                            primary: '#3F3F46',
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        },
                        boxShadowColor: {
                            primary: '#A1A1AA'
                        },
                        borderColor: {
                            accent: {
                                DEFAULT: '#18181B',
                                contrast: '#F4F4F5'
                            }
                        }
                    }
                },
                {
                    name: 'sky',
                    extend: {
                        colors: {
                            primary: '#0C4A6E',
                            secondary: '#0C4A6E',
                            light: '#0284C7',
                            accent: {
                                DEFAULT: '#0C4A6E',
                                contrast: '#F0F9FF'
                            }
                        },
                        backgroundColor: {
                            primary: '#BAE6FD',
                            secondary: '#E0F2FE',
                            track: '#7DD3FC',
                            accent: {
                                DEFAULT: '#0369A1',
                                contrast: '#F0F9FF'
                            }
                        },
                        backgroundImage: {
                            primary: 'linear-gradient(to bottom, #FEF9C3 0%, #BAE6FD 90%), linear-gradient(to bottom, #BAE6FD 0%, #FEF9C3 90%) ',
                        },
                        fill: {
                            primary: '#075985',
                            accent: {
                                DEFAULT: '#0C4A6E',
                                contrast: '#F0F9FF'
                            }
                        },
                        boxShadowColor: {
                            primary: '#4B5563'
                        },
                        borderColor: {
                            accent: {
                                DEFAULT: '#0C4A6E',
                                contrast: '#F0F9FF'
                            }
                        }
                    }
                }
            ]
        })
    ],

    darkMode: 'class'
};

module.exports = config;
