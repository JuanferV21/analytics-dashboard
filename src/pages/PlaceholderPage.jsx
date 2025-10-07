import { Card, CardContent } from '../components/ui/Card';
import { motion } from 'framer-motion';

export function PlaceholderPage({ title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground mt-1">{description}</p>
      </div>

      <Card>
        <CardContent className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">{title} Coming Soon</h3>
            <p className="text-muted-foreground max-w-md">
              This section is under construction. More analytics and features will be available here soon.
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
