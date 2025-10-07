// Datos simulados para el dashboard

export const metricsCards = [
  {
    id: 1,
    title: 'Total Revenue',
    value: '$45,231',
    change: '+20.1%',
    trend: 'up',
    icon: 'dollar',
  },
  {
    id: 2,
    title: 'Active Users',
    value: '2,845',
    change: '+15.3%',
    trend: 'up',
    icon: 'users',
  },
  {
    id: 3,
    title: 'Conversion Rate',
    value: '3.24%',
    change: '+2.5%',
    trend: 'up',
    icon: 'trending',
  },
  {
    id: 4,
    title: 'Avg. Order Value',
    value: '$124.50',
    change: '-4.3%',
    trend: 'down',
    icon: 'package',
  },
];

// Datos para gráfica de líneas (Ventas mensuales)
export const monthlySalesData = [
  { month: 'Jan', sales: 4000, revenue: 2400, users: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398, users: 2210 },
  { month: 'Mar', sales: 2000, revenue: 9800, users: 2290 },
  { month: 'Apr', sales: 2780, revenue: 3908, users: 2000 },
  { month: 'May', sales: 1890, revenue: 4800, users: 2181 },
  { month: 'Jun', sales: 2390, revenue: 3800, users: 2500 },
  { month: 'Jul', sales: 3490, revenue: 4300, users: 2100 },
  { month: 'Aug', sales: 4200, revenue: 5200, users: 2800 },
  { month: 'Sep', sales: 3800, revenue: 4900, users: 2600 },
  { month: 'Oct', sales: 4100, revenue: 5100, users: 2900 },
  { month: 'Nov', sales: 4600, revenue: 5800, users: 3100 },
  { month: 'Dec', sales: 5200, revenue: 6400, users: 3400 },
];

// Datos para gráfica de barras (Usuarios activos por semana)
export const weeklyUsersData = [
  { day: 'Mon', active: 1200, inactive: 800, new: 240 },
  { day: 'Tue', active: 1800, inactive: 600, new: 320 },
  { day: 'Wed', active: 2200, inactive: 700, new: 410 },
  { day: 'Thu', active: 2600, inactive: 500, new: 380 },
  { day: 'Fri', active: 3000, inactive: 450, new: 450 },
  { day: 'Sat', active: 2400, inactive: 900, new: 290 },
  { day: 'Sun', active: 1800, inactive: 1100, new: 220 },
];

// Datos para tabla de transacciones recientes
export const recentTransactions = [
  {
    id: 'TXN-001',
    customer: 'John Doe',
    email: 'john@example.com',
    amount: '$324.50',
    status: 'completed',
    date: '2024-03-15',
  },
  {
    id: 'TXN-002',
    customer: 'Jane Smith',
    email: 'jane@example.com',
    amount: '$189.99',
    status: 'completed',
    date: '2024-03-15',
  },
  {
    id: 'TXN-003',
    customer: 'Mike Johnson',
    email: 'mike@example.com',
    amount: '$542.00',
    status: 'pending',
    date: '2024-03-14',
  },
  {
    id: 'TXN-004',
    customer: 'Sarah Williams',
    email: 'sarah@example.com',
    amount: '$89.50',
    status: 'completed',
    date: '2024-03-14',
  },
  {
    id: 'TXN-005',
    customer: 'Robert Brown',
    email: 'robert@example.com',
    amount: '$1,234.00',
    status: 'failed',
    date: '2024-03-13',
  },
  {
    id: 'TXN-006',
    customer: 'Emily Davis',
    email: 'emily@example.com',
    amount: '$456.75',
    status: 'completed',
    date: '2024-03-13',
  },
];

// Datos para gráfica de dona (Distribución de categorías)
export const categoryDistribution = [
  { name: 'Electronics', value: 4500, percentage: 35 },
  { name: 'Clothing', value: 3200, percentage: 25 },
  { name: 'Food', value: 2400, percentage: 18 },
  { name: 'Books', value: 1600, percentage: 12 },
  { name: 'Others', value: 1300, percentage: 10 },
];

// Datos de tráfico por fuente
export const trafficSources = [
  { source: 'Organic Search', visitors: 12543, percentage: 42 },
  { source: 'Direct', visitors: 8234, percentage: 28 },
  { source: 'Social Media', visitors: 5621, percentage: 19 },
  { source: 'Referral', visitors: 2341, percentage: 8 },
  { source: 'Email', visitors: 891, percentage: 3 },
];
