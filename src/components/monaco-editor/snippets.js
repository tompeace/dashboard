export default [
  {
    name: "Arrays",
    functions: [
      {
        name: "ARRAY_SIZE",
        description: "Returns length of 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_DISTINCT",
        description: "Returns array with distinct elements found in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_COUNT_DISTINCT",
        description: "Returns JSON object mapping each distinct elements found in 'array' to its count",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_SUM",
        description: "Returns sum of array numerical items",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_MAX",
        description: "Returns maximum numerical value in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_MIN",
        description: "Returns minimum numerical value in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_CNT",
        description: "Counts numerical values in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_AVG",
        description: "Returns mean value in array",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_STD",
        description: "Returns standard deviation value in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "IN_ARRAY",
        description: "Returns the index of the first occurrence of 'value' in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "value",
            description: "Value which first occurrence position in the array, in any, is to be determined"
          }
        ]
      },
      {
        name: "ARRAY_CONCAT",
        description: "Returns array resulting of concatenating 'array1' and 'array2' (of any data-type)",
        args: [
          {
            name: "array1",
            description: "Source JSON-array1 - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "array2",
            description: "Source JSON-array2 - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_APPEND",
        description: "Returns array resulting of appending 'value' to 'array1 (of any data-type)",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "value",
            description: "Value to be appended to the end of 'array' - null if not given"
          }
        ]
      },
      {
        name: "ARRAY_INSERT",
        description: "Returns array resulting of inserting 'value' to 'array' (of any data-type) at given 'position'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "value",
            description: "Value to be inserted in 'position' of 'array' - null if not given"
          },
          {
            name: "position",
            description: "Position (starting at 1) where 'value' must be inserted - first position assumed if not given"
          }
        ]
      },
      {
        name: "ARRAY_REMOVE",
        description: "Returns array resulting of removing element from 'array' at given 'position'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "position",
            description: "Position (starting at 1) which element must be removed - first position assumed if not given"
          }
        ]
      },
      {
        name: "ARRAY_REPLACE",
        description: "Returns array resulting of replacing element from 'array' at given 'position' by 'value'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "value",
            description: "Value to be placed in 'position' of 'array' - null if not given"
          },
          {
            name: "position",
            description: "Position (starting at 1) which element must be replaced - first position assumed if not given"
          }
        ]
      },
      {
        name: "ARRAY_SUBSTITUTE",
        description: "Returns array resulting of replacing all elements with value 'from' by 'to'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "from",
            description: "Value to be replaced  - null if not given"
          },
          {
            name: "to",
            description: "Value to replace with - null if not given"
          }
        ]
      },
      {
        name: "ARRAY_REVERSE",
        description: "Returns array resulting of reversing order of elements in 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          }
        ]
      },
      {
        name: "ARRAY_NUM_SORT",
        description: "Returns number/JSON-object array resulting of ordering elements in 'array' by its numerical value/at 'path' - sorting is stable",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "path",
            description: "Path (string) pointing to JSON field that must be used for number sorting JSON-array - descriptionault=NULL (i.e., numerical array)"
          }
        ]
      },
      {
        name: "ARRAY_STR_SORT",
        description: "Returns array resulting of ordering string representations of elements in 'array'/their values at 'path' - sorting is stable",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "path",
            description: "Path (string) pointing to JSON field that must be used for string sorting JSON-array - descriptionault=NULL (i.e., sort array value string-represetations)"
          }
        ]
      },
      {
        name: "ARRAY_OP",
        description: "Returns array resulting of applying 'operator' on elements of both arrays - if one or parameters is scalar, applies to all elements of the other array parameter",
        args: [
          {
            name: "array1",
            description: "Left  JSON-array operand - if it cannot be parsed to JSON-array, scalar is assumed"
          },
          {
            name: "array2",
            description: "Right JSON-array operand - if it cannot be parsed to JSON-array, scalar is assumed"
          },
          {
            name: "operator",
            description: "Binary operator (string): +,´,*,/,^,&,|,=,<>,>,<,>=,<="
          }
        ]
      },
      {
        name: "ARRAY2STRINGLIST",
        description: "Returns string 'separator' delimited list representation of 'array'",
        args: [
          {
            name: "array",
            description: "Source JSON-array - if NULL, INVALID_ARRAY_ARG error (as described above)"
          },
          {
            name: "separator",
            description: "List element delimiter - if NULL, empty string used"
          }
        ]
      },
      {
        name: "STRINGLIST2ARRAY",
        description: "Returns string-array with 'separator' delimited list representation of 'array'",
        args: [
          {
            name: "string_list",
            description: "List represented as 'separator'-delimited string"
          },
          {
            name: "separator",
            description: "List element delimiter - if NULL, empty string used: array with string characters"
          }
        ]
      }
    ]
  },
  {
    name: "bigengine",
    functions: [
      {
        name: "CREATE_PROCESS_INSTANCE",
        description: "Creates a process instance based on existing process descriptioninition i.e., all data except for global start/end dates are copied from process",
        args: [
          {
            name: "code",
            description: "Process instance ID & CODE (string)"
          },
          {
            name: "process",
            description: "Process ID used to create process-instance (string)"
          },
          {
            name: "start",
            description: "Global start date (timestamp-string or epoch-long)"
          },
          {
            name: "end",
            description: "Global end   date (timestamp-string or epoch-long) - optional, if not given current date is assumed"
          }
        ]
      },
      {
        name: "GET_VALUES_BEFORE",
        description: "Retrieves a number of data values for given source entity before a given date - in time-descending order",
        args: [
          {
            name: "id",
            description: "Source entity id: beId or entity ID and type separated by semicolon"
          },
          {
            name: "count",
            description: "Number of values to retrieve"
          },
          {
            name: "timestamp",
            description: "Date-time to retrieve values before from (timestamp-string or epoch-long) - optional - descriptionault: current recording time"
          },
          {
            name: "expiration",
            description: "Maximum time to scan backward (number of seconds) - optional - descriptionault: a day (86400 seconds)"
          }
        ]
      },
      {
        name: "GET_VALUES_AFTER",
        description: "Retrieves a number of data values for given source entity after a given date - in time-ascending order",
        args: [
          {
            name: "id",
            description: "Source entity id: beId or entity ID and type separated by semicolon"
          },
          {
            name: "count",
            description: "Number of values to retrieve"
          },
          {
            name: "timestamp",
            description: "Date-time to retrieve values after from (timestamp-string or epoch-long) - required"
          },
          {
            name: "expiration",
            description: "Maximum time to scan forward (number of seconds) - optional - descriptionault: a day (86400 seconds)"
          }
        ]
      },
      {
        name: "GET_ENTITY_VAR",
        description: "Retrieves entity given variable data",
        args: [
          {
            name: "id",
            description: "Source entity id: beId or entity ID and type separated by semicolon"
          },
          {
            name: "variable",
            description: "Entity data name to be retrieved (case-insensitive string) - optional (descriptionault='VALUE')"
          }
        ]
      },
      {
        name: "INPUT_DATA_VALUE",
        description: "Records value for given source entity at given time",
        args: [
          {
            name: "id",
            description: "Source entity id: beId or entity ID and type separated by semicolon"
          },
          {
            name: "value",
            description: "Object value to be recorded"
          },
          {
            name: "timestamp",
            description: "Date-time to record value at (timestamp-string or epoch-long) - optional - descriptionault: current recording time"
          }
        ]
      },
      {
        name: "GET_PREDICTION",
        description: "ML-model predicted value for given input values",
        args: [
          {
            name: "model_id",
            description: "Model ID (string) (given when model is created)"
          },
          {
            name: "input",
            description: "Array with variable values in the same order the model was built with"
          }
        ]
      }
    ]
  },
  {
    name: "Date Time",
    functions: [
      {
        name: "NOW",
        description: "Returns epoch/timestamp (i.e., milliseconds since January 1st 1970) for current date",
        args: []
      },
      {
        name: "TIME2STR",
        description: "Returns string with given date formatted according to argument specifications",
        args: [
          {
            name: "date",
            description: "Date to format (optional), descriptionault: current time"
          },
          {
            name: "format",
            description: "Format (optional), descriptionault: if timezone given: yyyy-MM-dd HH:mm:ss, otherwise yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
          },
          {
            name: "timezone",
            description: "Timezone (optional), descriptionault: UTC. If invalid timezone specified, GMT(=UTC) is used"
          },
          {
            name: "locale",
            description: "Locale (optional), descriptionault: EN"
          }
        ]
      },
      {
        name: "STR2TIME",
        description: "Returns time represented by string formatted according to argument specifications",
        args: [
          {
            name: "date",
            description: "String representing date-time"
          },
          {
            name: "format",
            description: "Format (optional), descriptionault: if timezone given: yyyy-MM-dd HH:mm:ss, otherwise yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
          },
          {
            name: "timezone",
            description: "Timezone (optional), descriptionault: UTC. If invalid timezone specified, GMT(=UTC) is used"
          },
          {
            name: "locale",
            description: "Locale (optional), descriptionault: EN"
          }
        ]
      },
      {
        name: "DATE_PART",
        description: "Returns number corresponding to specific part of given date",
        args: [
          {
            name: "date",
            description: "Date (optional, descriptionault: current time) to determine its part"
          },
          {
            name: "part",
            description: "String(optional, descriptionault: day)"
          },
          {
            name: "timezone",
            description: "Timezone (optional), descriptionault: UTC. If invalid timezone specified, GMT(=UTC) is used"
          }
        ]
      },
      {
        name: "DATE_START",
        description: "Returns date-time corresponding to start of specified part relative to given date",
        args: [
          {
            name: "date",
            description: "Date (optional, descriptionault: current time) to determine its part-start-time"
          },
          {
            name: "part",
            description: "String (optional, descriptionault: day) - dayOfYear, weekDay and msec do NOT apply"
          },
          {
            name: "timezone",
            description: "Timezone (optional), descriptionault: UTC. If invalid timezone specified, GMT(=UTC) is used"
          }
        ]
      },
      {
        name: "DATE_ADD",
        description: "Returns date-time corresponding to adding/subtracting numerical value from given date",
        args: [
          {
            name: "date",
            description: "Date (optional, descriptionault: current time) to add/subtract value on"
          },
          {
            name: "value",
            description: "Value to add/subtract to given date. If integer value, and part = year, quarter, month or day, addition happens on calendar - i.e., days/year, days/month, daylight saving shifts are accounted for - timezone is used. Otherwise, addition happens directly in msec, after converting year=365days, quarter=90days and month=30days. If non-numerical value passed - e.g, string - string-representation parsing into number is attempted"
          },
          {
            name: "part",
            description: "String   (optional, descriptionault: day) - dayOfYear and weekDay do NOT apply"
          },
          {
            name: "timezone",
            description: "Timezone (optional), descriptionault: UTC. If invalid timezone specified, GMT(=UTC) is used"
          }
        ]
      },
      {
        name: "DATE_DIFF",
        description: "Returns time-difference between dates in given date-part units",
        args: [
          {
            name: "date1",
            description: "Date (optional, descriptionault: current time)"
          },
          {
            name: "date2",
            description: "Date (optional, descriptionault: current time)"
          },
          {
            name: "part",
            description: "String   (optional, descriptionault: day) - dayOfYear and weekDay do NOT apply"
          },
          {
            name: "timezone",
            description: "Timezone (optional), descriptionault: UTC. If invalid timezone specified, GMT(=UTC) is used"
          }
        ]
      }
    ]
  },
  {
    name: "Filter JSON",
    functions: [
      {
        name: "FILTER_IN_FLAT",
        description: "Returns matching JSON nodes with no parent information",
        args: [
          {
            name: "json",
            description: "The initial JSON or its string-representation to be filtered"
          },
          {
            name: "filter",
            description: "The filter expression in JSONPath format (string)"
          }
        ]
      },
      {
        name: "FILTER_IN_JSON",
        description: "Returns matching JSON nodes in their original path",
        args: [
          {
            name: "json",
            description: "The initial JSON or its string-representation to be filtered"
          },
          {
            name: "filter",
            description: "The filter expression in JSONPath format (string)"
          },
          {
            name: "pack",
            description: "Arrays are packed/shortened removing null items (eventually caused by unmatched array node-items) (optional boolean - descriptionault=false)"
          }
        ]
      },
      {
        name: "FILTER_IN_WILDCARDS",
        description: "Returns JSON with matching nodes replaced by the specified wildcard",
        args: [
          {
            name: "json",
            description: "The initial JSON or its string-representation to be filtered"
          },
          {
            name: "filter",
            description: "The filter expression in JSONPath format (string)"
          },
          {
            name: "wildcard",
            description: "String to replace nodes that match with filter condition (optional string - descriptionault=*)"
          }
        ]
      }
    ]
  },
  {
    name: "JSON",
    functions: [
      {
        name: "CREATE_JSON",
        description: "Returns JSON from string representation - if JSON is returned as it is, other objects are converted to string prior to parsing it into JSON",
        args: [
          {
            name: "json",
            description: "The initial JSON string-representation"
          }
        ]
      },
      {
        name: "GET_NODE_VALUE",
        description: "Returns value from JSON",
        args: [
          {
            name: "json",
            description: "The source JSON"
          },
          {
            name: "path",
            description: "The path in JSON to get value from"
          }
        ]
      },
      {
        name: "SET_NODE_VALUE",
        description: "Set JSON node value at specified path - array length extended if needed",
        args: [
          {
            name: "json",
            description: "The initial JSON"
          },
          {
            name: "path",
            description: "The path in JSON to get value from"
          },
          {
            name: "value",
            description: "Value to set - path is created, if needed to set the value"
          }
        ]
      },
      {
        name: "DELETE_NODE",
        description: "Removes JSON node at specified path - array size shrinks",
        args: [
          {
            name: "json",
            description: "The source JSON"
          },
          {
            name: "path",
            description: "The path in JSON to remove value"
          }
        ]
      },
      {
        name: "GET_KEYS_FROM_NODE",
        description: "Returns a JSON array with the list of keys of the JSON object located at given path",
        args: [
          {
            name: "json",
            description: "The source JSON"
          },
          {
            name: "path",
            description: "The path of the JSON node (object) to obtain list of keys"
          }
        ]
      }
    ]
  },
  {
    name: "Math",
    functions: [
      {
        name: "ABS",
        description: "Returns absolute value",
        args: [
          {
            name: "value",
            description: "Number from which absolute value must be obtained"
          }
        ]
      },
      {
        name: "INT",
        description: "Returns integer part",
        args: [
          {
            name: "value",
            description: "Number from which integer part must be obtained"
          }
        ]
      },
      {
        name: "ROUND",
        description: "Rounds number to the specified number of decimals",
        args: [
          {
            name: "value",
            description: "Number to be rounded"
          },
          {
            name: "decimals",
            description: "Number of required decimals - integer part is taken - negative allowed (meaning zeroes before decimal dot)"
          }
        ]
      },
      {
        name: "MOD",
        description: "Returns modulus (division remainder) of two values",
        args: [
          {
            name: "value",
            description: "Number which modulus is evaluated: dividend of the division to find remainder"
          },
          {
            name: "module",
            description: "Number which respect modulus is evaluated: divisor of the division to find remainder"
          }
        ]
      },
      {
        name: "SQRT",
        description: "Returns square root",
        args: [
          {
            name: "value",
            description: "Number from which square root must be obtained"
          }
        ]
      },
      {
        name: "EXP",
        description: "Calculates the value of e raised to the power of given number",
        args: [
          {
            name: "value",
            description: "Number from which exponential must be obtained"
          }
        ]
      },
      {
        name: "LOG",
        description: "Calculates the natural logarithm of given value",
        args: [
          {
            name: "value",
            description: "Number from which natural logarithm must be obtained"
          }
        ]
      },
      {
        name: "MAX",
        description: "Returns maximum value of two values - numerical comparison if both values are numerical, otherwise value string-representations are compared",
        args: [
          {
            name: "valueX",
            description: "First value"
          },
          {
            name: "valueY",
            description: "Second value"
          }
        ]
      },
      {
        name: "MIN",
        description: "Returns minimum value of two values - numerical comparison if both values are numerical, otherwise value string-representations are compared",
        args: [
          {
            name: "valueX",
            description: "First value"
          },
          {
            name: "valueY",
            description: "Second value"
          }
        ]
      },
      {
        name: "SIN",
        description: "Returns the sine of a given angle",
        args: [
          {
            name: "value",
            description: "Angle (either in radians or degrees) - see radians"
          },
          {
            name: "radians",
            description: "Boolean (optional, descriptionault=true) specifying angle in radians vs. degrees - if not boolean, it is ignored and descriptionault (radians) is assumed"
          }
        ]
      },
      {
        name: "COS",
        description: "Returns the cosine of a given angle",
        args: [
          {
            name: "value",
            description: "Angle (either in radians or degrees) - see radians"
          },
          {
            name: "radians",
            description: "Boolean (optional, descriptionault=true) specifying angle in radians vs. degrees - if not boolean, it is ignored and descriptionault (radians) is assumed"
          }
        ]
      },
      {
        name: "TAN",
        description: "Returns the tangent of a given angle",
        args: [
          {
            name: "value",
            description: "Angle (either in radians or degrees) - see radians"
          },
          {
            name: "radians",
            description: "Boolean (optional, descriptionault=true) specifying angle in radians vs. degrees - if not boolean, it is ignored and descriptionault (radians) is assumed"
          }
        ]
      },
      {
        name: "ASIN",
        description: "Evaluates arc-sine (radians) of given value",
        args: [
          {
            name: "value",
            description: "Number from which arc-sine must be obtained"
          }
        ]
      },
      {
        name: "ACOS",
        description: "Evaluates arc-cosine (radians) of given value",
        args: [
          {
            name: "value",
            description: "Number from which arc-cosine must be obtained"
          }
        ]
      },
      {
        name: "ATAN",
        description: "Evaluates arc-tangent (radians) of given value",
        args: [
          {
            name: "value",
            description: "Number from which arc-tangent must be obtained"
          }
        ]
      },
      {
        name: "ATAN2",
        description: "Converts rectangular coordinates to polar coordinate angle (in radians)",
        args: [
          {
            name: "valueX",
            description: "X-coordinate"
          },
          {
            name: "valueY",
            description: "Y-coordinate"
          }
        ]
      }
    ]
  },
  {
    name: "REST",
    functions: [
      {
        name: "REST_CALL",
        description: "Calls given URL/ARN/method with optional parameters and user credentials, returning JSON service response",
        args: [
          {
            name: "url",
            description: "Service URL (string)"
          },
          {
            name: "arn",
            description: "ARN service path (string - optional)"
          },
          {
            name: "method",
            description: "Service method (String - optional)"
          },
          {
            name: "parameters",
            description: "JSON containing parameter name:value pairs (JSON or its string-representation - optional)"
          },
          {
            name: "user",
            description: "Service authentication user     (string - optional)"
          },
          {
            name: "password",
            description: "Service authentication password (string - optional)"
          },
          {
            name: "timeout",
            description: "Connection timeout (msec - integer - optional - descriptionault: no timeout)"
          }
        ]
      }
    ]
  },
  {
    name: "Statistics",
    functions: [
      {
        name: "GET_STATISTICS",
        description: "Queries through the indexed data to obtain statistics for a given set of entities in a given time range",
        args: [
          {
            name: "entityList",
            description: "List of entities as |-delimited-string or array of beIDs, ID;TYPE,... -. If any of the entities is non-numerical, error is obtained"
          },
          {
            name: "start",
            description: "Time-range for all entities - epoch or ISO-timestamps accepted - 'start' is required"
          },
          {
            name: "end",
            description: "Time-range for all entities - epoch or ISO-timestamps accepted - 'end' is optional, current time is assumed"
          },
          {
            name: "statItems",
            description: "Optional |-delimited string-list of required statistical items: COUNT, SUM, SQS (sum of squares), MIN, MAX, AVG (average), STD (standard deviation), MED (median or percentile 50%), P25 (percentile 25%), P75 (percentile 75%), ALL (all of the previous ones), FILTERED (to recalculate requested items filtering out outliers - i.e., outside MED-|+1.5*IRQ range (where IRQ=P75-P25)), and OUTLIERS (to list outliers classified in LOLO, LO, HI and HIHI). If not given ALL is assumed"
          }
        ]
      },
      {
        name: "GET_VALUE_STATISTICS",
        description: "Queries data-lake (including real-time data) to obtain statistics for a given entity in a given time range",
        args: [
          {
            name: "ID",
            description: "beID or ID;TYPE - If entity is non-numerical, error is obtained"
          },
          {
            name: "start",
            description: "Time-range - epoch or ISO-timestamps accepted - 'start' is required"
          },
          {
            name: "end",
            description: "Time-range - epoch or ISO-timestamps accepted - 'end' is optional, current time is assumed"
          },
          {
            name: "statItems",
            description: "Optional |-delimited string-list of required statistical items: COUNT, SUM, SQS (sum of squares), MIN, MAX, AVG (average), STD (standard deviation), ALL (all of the previous ones). If not given ALL is assumed"
          }
        ]
      }
    ]
  },
  {
    name: "Strings",
    functions: [
      {
        name: "LEN",
        description: "Returns the length of string",
        args: [
          {
            name: "string",
            description: "String which length must be determined"
          }
        ]
      },
      {
        name: "LEFT",
        description: "Returns given length string containing the leftmost characters of given string, right-padded with blanks if necessary",
        args: [
          {
            name: "string",
            description: "String which leftmost characters are to be taken"
          },
          {
            name: "num_chars",
            description: "Length of string result"
          }
        ]
      },
      {
        name: "RIGHT",
        description: "Returns given length string containing the rightmost characters of given string, left-padded with blanks if necessary",
        args: [
          {
            name: "string",
            description: "String which rightmost characters are to be taken"
          },
          {
            name: "num_chars",
            description: "Length of string result"
          }
        ]
      },
      {
        name: "MID",
        description: "Returns given length string containing the characters of given string at given position, left-padded with blanks if necessary",
        args: [
          {
            name: "string",
            description: "String which length must be determined"
          },
          {
            name: "position",
            description: "Position of first character to be taken (1-...). Case 0 : center string in given length; Case <0: extend original string with -position characters"
          },
          {
            name: "num_chars",
            description: "Length of string result"
          }
        ]
      },
      {
        name: "TRIM",
        description: "Returns trimmed string",
        args: [
          {
            name: "string",
            description: "String to be trimmed"
          }
        ]
      },
      {
        name: "UPPER",
        description: "Returns string converted to upper-case",
        args: [
          {
            name: "string",
            description: "String to be converted to upper-case"
          }
        ]
      },
      {
        name: "LOWER",
        description: "Returns string converted to lower-case",
        args: [
          {
            name: "string",
            description: "String to be converted to lower-case"
          }
        ]
      },
      {
        name: "LETTER",
        description: "Returns the char for given index",
        args: [
          {
            name: "index",
            description: "Position starting in 0. Single character string with A-Z (for 'index'=1,...,26) or ASCII -'index' control/character (for 'index'=0-255)"
          }
        ]
      },
      {
        name: "IN_STRING",
        description: "Returns the first position (1 -...) of a substring - 0 if substring is not in string",
        args: [
          {
            name: "string",
            description: "String in which substring will be searched for"
          },
          {
            name: "substring",
            description: "Substring to be found or matched"
          }
        ]
      },
      {
        name: "STARTS_WITH",
        description: "Check if string starts with given prefix",
        args: [
          {
            name: "string",
            description: "String which prefix is to be determined"
          },
          {
            name: "prefix",
            description: "Prefix string to check"
          }
        ]
      },
      {
        name: "ENDS_WITH",
        description: "Check if string ends with given suffix",
        args: [
          {
            name: "string",
            description: "String which suffix is to be determined"
          },
          {
            name: "suffix",
            description: "Suffix string to check"
          }
        ]
      },
      {
        name: "REPLACE",
        description: "Replaces ALL occurrences of given substring in a string by another substring",
        args: [
          {
            name: "string",
            description: "String which substrings must be replaced"
          },
          {
            name: "from",
            description: "Substring to be replaced - if empty string, replacing substring is inserted leading, trailing and between each character"
          },
          {
            name: "to",
            description: "Substring to replace into"
          }
        ]
      },
      {
        name: "STR2NUM",
        description: "Returns numerical value  corresponding to string, according to given locale/language",
        args: [
          {
            name: "string",
            description: "String representing a number"
          },
          {
            name: "locale",
            description: "Optional language determining decimal/thousand separators - descriptionault is US English (i.e., dot decimal and comma thousand separators)"
          }
        ]
      },
      {
        name: "NUM2STR",
        description: "Returns numerical value  corresponding to string, according to given locale/language",
        args: [
          {
            name: "value",
            description: "Number to be converted/formatted into string - any object which string representation corresponds to number is accepted"
          },
          {
            name: "format",
            description: "Optional format string - e.g., #,##0.00 - if not given string corresponds to Java number representation"
          },
          {
            name: "locale",
            description: "Optional language determining decimal/thousand separators - descriptionault is US English (i.e., dot decimal and comma thousand separators)"
          }
        ]
      }
    ]
  }
]