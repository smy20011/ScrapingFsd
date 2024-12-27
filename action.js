#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// for you to change easily
const dataFolder = '/data';
const now = new Date();
const pathToData = path.join(__dirname, dataFolder, fileString(now)) + '.json';

// read data, if needed
let data = [];
if (fs.existsSync(pathToData)) {
  data = JSON.parse(fs.readFileSync(pathToData));
}

// scrape data, possibly using prior data
async function getData() {
  const response = await fetch('https://wabi-us-east2-b-primary-api.analysis.windows.net/public/reports/querydata?synchronous=true', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,zh-TW;q=0.6,uk;q=0.5',
      'ActivityId': '66acbcfc-a36e-b02b-148b-cafb0f201131',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json;charset=UTF-8',
      'Origin': 'https://app.powerbi.com',
      'Pragma': 'no-cache',
      'Referer': 'https://app.powerbi.com/',
      'RequestId': '36bbea28-b253-f7f9-9294-e1a6526da8dc',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'X-PowerBI-ResourceKey': 'e9d1f553-a352-4bff-a8f4-fa43a228303c',
      'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"'
    },
    body: JSON.stringify({
      'version': '1.0.0',
      'queries': [
        {
          'Query': {
            'Commands': [
              {
                'SemanticQueryDataShapeCommand': {
                  'Query': {
                    'Version': 2,
                    'From': [
                      {
                        'Name': 'l',
                        'Entity': 'LogSummaryVersionVin',
                        'Type': 0
                      },
                      {
                        'Name': 't',
                        'Entity': 'TopTestersSlicer',
                        'Type': 0
                      }
                    ],
                    'Select': [
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'SumMilesVin'
                        },
                        'Name': 'LogSummaryVersionVin.SumMilesVin',
                        'NativeReferenceName': 'Miles'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'SumCityMilesVin'
                        },
                        'Name': 'LogSummaryVersionVin.SumCityMilesVin',
                        'NativeReferenceName': 'City Miles'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'SumHwyMilesVin'
                        },
                        'Name': 'LogSummaryVersionVin.SumHwyMilesVin',
                        'NativeReferenceName': 'Hwy Miles'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': '%DrivesNoCritDEVersionVin'
                        },
                        'Name': 'LogSummaryVersionVin.%DrivesNoCritDEVersionVin',
                        'NativeReferenceName': '%DrivesNoCriticalDE'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': '%DrivesNoDEVersionVin'
                        },
                        'Name': 'LogSummaryVersionVin.%DrivesNoDEVersionVin',
                        'NativeReferenceName': '%DrivesNoDE'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'CityMiles2DEVin%ile'
                        },
                        'Name': 'LogSummaryVersionVin.CityMiles2DEVin%ile',
                        'NativeReferenceName': 'City Miles to DE'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'HwyMiles2DEVin%ile'
                        },
                        'Name': 'LogSummaryVersionVin.HwyMiles2DEVin%ile',
                        'NativeReferenceName': 'Hwy Miles to DE'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'Miles2DECriticalVin%ile'
                        },
                        'Name': 'LogSummaryVersionVin.Miles2DECriticalVin%ile',
                        'NativeReferenceName': 'Miles to Critical DE'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'CityMiles2DECriticalVin%ile'
                        },
                        'Name': 'LogSummaryVersionVin.CityMiles2DECriticalVin%ile',
                        'NativeReferenceName': 'City Miles to Critical DE'
                      },
                      {
                        'Measure': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'Miles2DEVin%ile'
                        },
                        'Name': 'LogSummaryVersionVin.Miles2DEVin%ile',
                        'NativeReferenceName': 'Miles to DE'
                      },
                      {
                        'Column': {
                          'Expression': {
                            'SourceRef': {
                              'Source': 'l'
                            }
                          },
                          'Property': 'Version'
                        },
                        'Name': 'LogSummaryVersionVin.Version',
                        'NativeReferenceName': 'Version'
                      },
                      {
                        'Aggregation': {
                          'Expression': {
                            'Column': {
                              'Expression': {
                                'SourceRef': {
                                  'Source': 'l'
                                }
                              },
                              'Property': 'MinDate'
                            }
                          },
                          'Function': 3
                        },
                        'Name': 'LogSummaryVersionVin.MinDate',
                        'NativeReferenceName': 'MinDate'
                      },
                      {
                        'Aggregation': {
                          'Expression': {
                            'Column': {
                              'Expression': {
                                'SourceRef': {
                                  'Source': 'l'
                                }
                              },
                              'Property': 'Entries'
                            }
                          },
                          'Function': 0
                        },
                        'Name': 'Sum(LogSummaryVersionVin.Entries)',
                        'NativeReferenceName': 'Entries'
                      }
                    ],
                    'Where': [
                      {
                        'Condition': {
                          'In': {
                            'Expressions': [
                              {
                                'Column': {
                                  'Expression': {
                                    'SourceRef': {
                                      'Source': 't'
                                    }
                                  },
                                  'Property': 'Interval'
                                }
                              }
                            ],
                            'Values': [
                              [
                                {
                                  'Literal': {
                                    'Value': '\'O\''
                                  }
                                }
                              ]
                            ]
                          }
                        }
                      }
                    ],
                    'OrderBy': [
                      {
                        'Direction': 2,
                        'Expression': {
                          'Aggregation': {
                            'Expression': {
                              'Column': {
                                'Expression': {
                                  'SourceRef': {
                                    'Source': 'l'
                                  }
                                },
                                'Property': 'MinDate'
                              }
                            },
                            'Function': 3
                          }
                        }
                      }
                    ]
                  },
                  'Binding': {
                    'Primary': {
                      'Groupings': [
                        {
                          'Projections': [
                            0,
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9,
                            10,
                            11,
                            12
                          ]
                        }
                      ]
                    },
                    'DataReduction': {
                      'DataVolume': 3,
                      'Primary': {
                        'Window': {
                          'Count': 500
                        }
                      }
                    },
                    'Version': 1
                  },
                  'ExecutionMetricsKind': 1
                }
              }
            ]
          },
          'CacheKey': '{"Commands":[{"SemanticQueryDataShapeCommand":{"Query":{"Version":2,"From":[{"Name":"l","Entity":"LogSummaryVersionVin","Type":0},{"Name":"t","Entity":"TopTestersSlicer","Type":0}],"Select":[{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"SumMilesVin"},"Name":"LogSummaryVersionVin.SumMilesVin","NativeReferenceName":"Miles"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"SumCityMilesVin"},"Name":"LogSummaryVersionVin.SumCityMilesVin","NativeReferenceName":"City Miles"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"SumHwyMilesVin"},"Name":"LogSummaryVersionVin.SumHwyMilesVin","NativeReferenceName":"Hwy Miles"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"%DrivesNoCritDEVersionVin"},"Name":"LogSummaryVersionVin.%DrivesNoCritDEVersionVin","NativeReferenceName":"%DrivesNoCriticalDE"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"%DrivesNoDEVersionVin"},"Name":"LogSummaryVersionVin.%DrivesNoDEVersionVin","NativeReferenceName":"%DrivesNoDE"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"CityMiles2DEVin%ile"},"Name":"LogSummaryVersionVin.CityMiles2DEVin%ile","NativeReferenceName":"City Miles to DE"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"HwyMiles2DEVin%ile"},"Name":"LogSummaryVersionVin.HwyMiles2DEVin%ile","NativeReferenceName":"Hwy Miles to DE"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Miles2DECriticalVin%ile"},"Name":"LogSummaryVersionVin.Miles2DECriticalVin%ile","NativeReferenceName":"Miles to Critical DE"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"CityMiles2DECriticalVin%ile"},"Name":"LogSummaryVersionVin.CityMiles2DECriticalVin%ile","NativeReferenceName":"City Miles to Critical DE"},{"Measure":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Miles2DEVin%ile"},"Name":"LogSummaryVersionVin.Miles2DEVin%ile","NativeReferenceName":"Miles to DE"},{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Version"},"Name":"LogSummaryVersionVin.Version","NativeReferenceName":"Version"},{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"MinDate"}},"Function":3},"Name":"LogSummaryVersionVin.MinDate","NativeReferenceName":"MinDate"},{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"Entries"}},"Function":0},"Name":"Sum(LogSummaryVersionVin.Entries)","NativeReferenceName":"Entries"}],"Where":[{"Condition":{"In":{"Expressions":[{"Column":{"Expression":{"SourceRef":{"Source":"t"}},"Property":"Interval"}}],"Values":[[{"Literal":{"Value":"\'O\'"}}]]}}}],"OrderBy":[{"Direction":2,"Expression":{"Aggregation":{"Expression":{"Column":{"Expression":{"SourceRef":{"Source":"l"}},"Property":"MinDate"}},"Function":3}}}]},"Binding":{"Primary":{"Groupings":[{"Projections":[0,1,2,3,4,5,6,7,8,9,10,11,12]}]},"DataReduction":{"DataVolume":3,"Primary":{"Window":{"Count":500}}},"Version":1},"ExecutionMetricsKind":1}}]}',
          'QueryId': '',
          'ApplicationContext': {
            'DatasetId': 'fdeb9a09-0231-4c34-91bd-339fd724248e',
            'Sources': [
              {
                'ReportId': 'e2baf5ad-b917-43f6-811e-1d69f8fa228c',
                'VisualId': 'e90f27468323162e2532'
              }
            ]
          }
        }
      ],
      'cancelQueries': [],
      'modelId': 1263361
    })
  });
  data = await response.json();
}

function extract_data(data) {
  const data_arr = data['results'][0]["result"]["data"]["dsr"]["DS"][0]["PH"][0]["DM0"].map(i => i['C']);
  const data_1133 = data_arr.find(item => item[0] === '11.3.3');
  const locate = (nums) => {
    const result = [];
    for (const num of nums) {
      const diff = data_1133.map(i => Math.abs(parseFloat(i) - num));
      let minIdx = 0;
      let minNum = 999999;
      for (let i = 0; i < diff.length; ++i) {
        if (!isNaN(diff[i]) && diff[i] < minNum) {
          minIdx = i;
          minNum = diff[i];
        }
      }
      result.push(minIdx);
    }
    return result;
  };

  const [cmd_idx, run_idx, sr_idx, min_d_idx] = locate([484, 60, 0.817, 1679875200000]);
  return data_arr.filter(item => item.length == data_1133.length).map(d => {
    return {
      'version': d[0],
      'city_miles': parseFloat(d[cmd_idx]),
      'runs': parseInt(d[run_idx]),
      'success_rate': parseFloat(d[sr_idx]),
      'min_date': new Date(parseInt(d[min_d_idx])).toJSON(),
    };
  });
}

// execute and persist data
getData() // no top level await... yet
  .then(() => {
    // persist data
    fs.writeFileSync(path.resolve(pathToData), JSON.stringify(data, null, 2));
    const extracted = extract_data(data);
    fs.writeFileSync(path.resolve('extracted/' + fileString(now) + ".json"), JSON.stringify(extracted, null, 2));
    fs.writeFileSync(path.resolve('extracted/latest.json'), JSON.stringify(extracted, null, 2));
  });

/**
 *
 * utils
 *
 */
function fileString(ts) {
  const year = ts.getUTCFullYear();
  const month = (ts.getUTCMonth() + 1).toString().padStart(2, '0');
  const day = ts
    .getUTCDate()
    .toString()
    .toString()
    .padStart(2, '0');
  const name = `${year}-${month}-${day}`;
  return name;
}
