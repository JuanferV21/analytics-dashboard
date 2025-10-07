import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Switch } from '../components/ui/Switch';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import {
  userProfile,
  notificationSettings,
  privacySettings,
  securitySettings,
} from '../data/dashboardData';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { User, Palette, Bell, Shield, Database, AlertTriangle } from 'lucide-react';

export function Settings() {
  const [activeTab, setActiveTab] = useState('account');

  const tabs = [
    { value: 'account', label: 'Account', icon: User },
    { value: 'appearance', label: 'Appearance', icon: Palette },
    { value: 'notifications', label: 'Notifications', icon: Bell },
    { value: 'privacy', label: 'Privacy & Security', icon: Shield },
    { value: 'data', label: 'Data', icon: Database },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-border overflow-x-auto">
        <TabsList className="inline-flex h-12 bg-transparent p-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                isActive={activeTab === tab.value}
                onClick={setActiveTab}
                className={cn(
                  'border-b-2 rounded-none px-4 py-3',
                  activeTab === tab.value
                    ? 'border-primary bg-transparent shadow-none'
                    : 'border-transparent'
                )}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      {/* Tab Content */}
      <Tabs value={activeTab}>
        {/* Account Tab */}
        <TabsContent value="account" activeTab={activeTab}>
          <div className="space-y-6">
            {/* Profile Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your account profile information and email address.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                      {userProfile.avatar}
                    </div>
                    <Button variant="outline">Change Avatar</Button>
                  </div>
                  <Input
                    label="Full Name"
                    defaultValue={userProfile.name}
                    placeholder="Enter your name"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    defaultValue={userProfile.email}
                    disabled
                  />
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Role</label>
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                        {userProfile.role}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Bio</label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      defaultValue={userProfile.bio}
                      placeholder="Tell us about yourself"
                    />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>
                    Update your password to keep your account secure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    label="Current Password"
                    type="password"
                    placeholder="Enter current password"
                  />
                  <Input
                    label="New Password"
                    type="password"
                    placeholder="Enter new password"
                  />
                  <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm new password"
                  />
                  <Button>Update Password</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Appearance Tab */}
        <TabsContent value="appearance" activeTab={activeTab}>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Theme</CardTitle>
                  <CardDescription>
                    Choose your preferred color theme.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Dark Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Toggle between light and dark themes
                      </p>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Display Settings</CardTitle>
                  <CardDescription>
                    Customize your viewing experience.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Compact Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Reduce spacing for a denser layout
                      </p>
                    </div>
                    <Switch defaultChecked={false} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Sidebar Labels</p>
                      <p className="text-sm text-muted-foreground">
                        Display text labels in sidebar navigation
                      </p>
                    </div>
                    <Switch defaultChecked={true} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Font Size</label>
                    <select className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Small</option>
                      <option selected>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Notifications Tab */}
        <TabsContent value="notifications" activeTab={activeTab}>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Email Notifications</CardTitle>
                  <CardDescription>
                    Manage your email notification preferences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">
                        Receive updates about new features and offers
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.email.marketing} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Product Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified about product releases
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.email.productUpdates} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Reports</p>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly analytics summaries
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.email.weeklyReports} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Security Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Important security notifications
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.email.securityAlerts} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Push Notifications</CardTitle>
                  <CardDescription>
                    Configure desktop notification settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Desktop Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Show browser notifications
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.push.desktop} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Sound Effects</p>
                      <p className="text-sm text-muted-foreground">
                        Play sounds for notifications
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.push.sound} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Badge Count</p>
                      <p className="text-sm text-muted-foreground">
                        Show notification count badges
                      </p>
                    </div>
                    <Switch defaultChecked={notificationSettings.push.badge} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Privacy & Security Tab */}
        <TabsContent value="privacy" activeTab={activeTab}>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>
                    Control who can see your information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Profile Visibility</label>
                    <select className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>Public</option>
                      <option>Private</option>
                      <option>Friends Only</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Show Online Status</p>
                      <p className="text-sm text-muted-foreground">
                        Let others see when you're online
                      </p>
                    </div>
                    <Switch defaultChecked={privacySettings.showOnlineStatus} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Sharing</p>
                      <p className="text-sm text-muted-foreground">
                        Allow anonymous analytics data sharing
                      </p>
                    </div>
                    <Switch defaultChecked={privacySettings.dataSharing} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>
                    Protect your account with additional security measures.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security
                      </p>
                      <span className="inline-flex items-center mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500">
                        Recommended
                      </span>
                    </div>
                    <Switch defaultChecked={securitySettings.twoFactorAuth} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Login Alerts</p>
                      <p className="text-sm text-muted-foreground">
                        Get notified of new device logins
                      </p>
                    </div>
                    <Switch defaultChecked={securitySettings.loginAlerts} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Session Timeout</label>
                    <select className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>15 minutes</option>
                      <option selected>30 minutes</option>
                      <option>1 hour</option>
                      <option>Never</option>
                    </select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Data Management Tab */}
        <TabsContent value="data" activeTab={activeTab}>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Export Data</CardTitle>
                  <CardDescription>
                    Download a copy of your data.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Export Format</label>
                    <select className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <option>JSON</option>
                      <option>CSV</option>
                      <option>PDF</option>
                    </select>
                  </div>
                  <Button variant="outline">Download Your Data</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Card className="border-red-500/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    <CardTitle className="text-red-500">Danger Zone</CardTitle>
                  </div>
                  <CardDescription>
                    Irreversible actions that affect your account and data.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                    <div>
                      <p className="font-medium">Delete Analytics Data</p>
                      <p className="text-sm text-muted-foreground">
                        Permanently remove all analytics data
                      </p>
                    </div>
                    <Button variant="outline" className="text-red-500 hover:bg-red-500/10">
                      Delete Data
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-border rounded-xl">
                    <div>
                      <p className="font-medium">Deactivate Account</p>
                      <p className="text-sm text-muted-foreground">
                        Temporarily disable your account
                      </p>
                    </div>
                    <Button variant="outline" className="text-red-500 hover:bg-red-500/10">
                      Deactivate
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-red-500 rounded-xl bg-red-500/5">
                    <div>
                      <p className="font-medium text-red-500">Delete Account</p>
                      <p className="text-sm text-muted-foreground">
                        Permanently delete your account and all data
                      </p>
                    </div>
                    <Button className="bg-red-500 hover:bg-red-600 text-white">
                      Delete Forever
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
