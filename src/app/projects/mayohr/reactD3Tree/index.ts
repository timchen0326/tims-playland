// Types
type OrgData = {
    rootUnit: OrgUnitData;
  };
  
  type OrgUnitData = {
    isRoot: boolean;
    code: string;
    displayCode: string;
    name: string;
    parentUnit?: OrgUnitData | null;
    childUnits?: OrgUnitData[];
    state: string | null;
    employees?: Employee[];
    upperCode: string | null;
    managersCode?: string[];
  };
  
  type Employee = {
    code: string;
    displayCode: string;
    name: string;
    state?: string | null;
    roleCodes: string[];
  };
  
  type TreeNode = {
    id: string;
    name: string;
    attributes?: { [key: string]: string };
    children?: TreeNode[];
    nodeSvgShape?: {
      shape: string;
      shapeProps: { [key: string]: any };
    };
  };
  
export const mockOrgData: OrgData[] = [
    {
      rootUnit: {
        isRoot: true,
        code: "HQ1",
        displayCode: "HQ1",
        name: "Headquarters 1",
        state: "Active",
        upperCode: null,
        managersCode: ["CEO001"],
        childUnits: [
          {
            isRoot: false,
            code: "IT",
            displayCode: "IT",
            name: "IT Department",
            state: null,
            upperCode: "HQ1",
            managersCode: ["CTO001", "ITM001"],
            employees: [
              {
                code: "DEV001",
                displayCode: "DEV001",
                name: "John Doe",
                state: "Active",
                roleCodes: ["Senior Developer"]
              },
              {
                code: "DEV002",
                displayCode: "DEV002",
                name: "Jane Smith",
                state: "Active",
                roleCodes: ["Junior Developer"]
              }
            ]
          },
          {
            isRoot: false,
            code: "HR",
            displayCode: "HR",
            name: "Human Resources",
            state: null,
            upperCode: "HQ1",
            managersCode: ["HRM001"],
            employees: [
              {
                code: "HRS001",
                displayCode: "HRS001",
                name: "Alice Johnson",
                state: "Active",
                roleCodes: ["HR Specialist"]
              }
            ]
          }
        ],
        employees: [
          {
            code: "CEO001",
            displayCode: "CEO001",
            name: "Bob Williams",
            state: "Active",
            roleCodes: ["Chief Executive Officer"]
          }
        ]
      }
    },
    {
      rootUnit: {
        isRoot: true,
        code: "HQ2",
        displayCode: "HQ2",
        name: "Headquarters 2",
        state: "Active",
        upperCode: null,
        managersCode: ["CEO002"],
        childUnits: [
          {
            isRoot: false,
            code: "FIN",
            displayCode: "FIN",
            name: "Finance Department",
            state: null,
            upperCode: "HQ2",
            managersCode: ["FM001"],
            employees: [
              {
                code: "FA001",
                displayCode: "FA001",
                name: "Grace Lee",
                state: "Active",
                roleCodes: ["Financial Analyst"]
              },
              {
                code: "FA002",
                displayCode: "FA002",
                name: "Henry White",
                state: "Active",
                roleCodes: ["Accountant"]
              }
            ]
          },
          {
            isRoot: false,
            code: "MKT",
            displayCode: "MKT",
            name: "Marketing Department",
            state: null,
            upperCode: "HQ2",
            managersCode: ["MKM001"],
            employees: [
              {
                code: "MKS001",
                displayCode: "MKS001",
                name: "Nancy Green",
                state: "Active",
                roleCodes: ["Marketing Specialist"]
              },
              {
                code: "MKS002",
                displayCode: "MKS002",
                name: "Patrick Adams",
                state: "Inactive",
                roleCodes: ["Marketing Coordinator"]
              }
            ]
          }
        ],
        employees: [
          {
            code: "CEO002",
            displayCode: "CEO002",
            name: "Linda Thompson",
            state: "Active",
            roleCodes: ["Chief Executive Officer"]
          }
        ]
      }
    },
    {
      rootUnit: {
        isRoot: true,
        code: "HQ3",
        displayCode: "HQ3",
        name: "Headquarters 3",
        state: "Active",
        upperCode: null,
        managersCode: ["CEO003"],
        childUnits: [
          {
            isRoot: false,
            code: "OPS",
            displayCode: "OPS",
            name: "Operations Department",
            state: null,
            upperCode: "HQ3",
            managersCode: ["OPM001"],
            employees: [
              {
                code: "OPS001",
                displayCode: "OPS001",
                name: "Mark Taylor",
                state: "Active",
                roleCodes: ["Operations Manager"]
              },
              {
                code: "OPS002",
                displayCode: "OPS002",
                name: "Sophie Brown",
                state: "Active",
                roleCodes: ["Operations Coordinator"]
              }
            ]
          },
          {
            isRoot: false,
            code: "SALES",
            displayCode: "SALES",
            name: "Sales Department",
            state: null,
            upperCode: "HQ3",
            managersCode: ["SM001"],
            employees: [
              {
                code: "SA001",
                displayCode: "SA001",
                name: "Ryan Cooper",
                state: "Active",
                roleCodes: ["Sales Representative"]
              },
              {
                code: "SA002",
                displayCode: "SA002",
                name: "Emily Carter",
                state: "Inactive",
                roleCodes: ["Sales Assistant"]
              }
            ]
          }
        ],
        employees: [
          {
            code: "CEO003",
            displayCode: "CEO003",
            name: "James Anderson",
            state: "Active",
            roleCodes: ["Chief Executive Officer"]
          }
        ]
      }
    }
  ];
  
  