
export type ViewState = 
  | 'HOME' 
  | 'QUOTE_STEP_1' 
  | 'QUOTE_STEP_2' 
  | 'QUOTE_STEP_3' 
  | 'QUOTE_STEP_4' 
  | 'QUOTE_PROCESSING'
  | 'QUOTE_RESULTS'
  | 'QUOTE_SUCCESS'
  | 'QUOTE_SUCCESS_OUT_OF_HOURS'
  | 'NOT_FOUND'
  | 'ADMIN_DASHBOARD'
  | 'ADMIN_LEADS'
  | 'ADMIN_LEAD_DETAIL'
  | 'ADMIN_ADVISORS'
  | 'ADMIN_CONFIG'
  | 'ADMIN_QUOTES'
  | 'ADMIN_SITEMAP';

export interface Plan {
  id: string;
  name: string;
  company: string;
  rating: number;
  price: number;
  tags: string[];
  description: string;
  logo: string;
  recommended?: boolean;
}

// Added Lead interface to support AdminLeads view
export interface Lead {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  location: string;
  status: string;
  type: string;
  category: string;
  currentPrepaga: string;
  timestamp: string;
}

// Added Advisor interface to support AdminAdvisors view
export interface Advisor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: string;
  assignedLeads: number;
  contactedPercentage: number;
  conversionRate: string;
}
