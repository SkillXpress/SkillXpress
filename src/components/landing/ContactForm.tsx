
'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Check, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const checkContainerVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
        opacity: 1, 
        scale: 1,
        transition: { 
            type: 'spring', 
            stiffness: 260,
            damping: 20,
            staggerChildren: 0.2,
        },
    },
};

const checkPathVariants = {
    hidden: { pathLength: 0 },
    visible: { 
        pathLength: 1,
        transition: {
            duration: 0.4,
            ease: 'easeInOut'
        }
    },
}

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mgvpyoqn");

  if (state.succeeded) {
    return (
        <motion.div
            variants={checkContainerVariants}
            initial="hidden"
            animate="visible"
            className="container mx-auto max-w-3xl text-center"
        >
            <Card>
                <CardContent className="p-10 flex flex-col items-center justify-center">
                    <motion.div
                        className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4"
                        variants={itemVariants}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <motion.path
                                d="M20 6L9 17l-5-5"
                                variants={checkPathVariants}
                            />
                        </motion.svg>
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-2xl font-bold tracking-tight sm:text-3xl font-headline">
                        Message Sent!
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
                        Thanks for reaching out. We'll get back to you shortly.
                    </motion.p>
                </CardContent>
            </Card>
        </motion.div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto max-w-3xl"
    >
      <Card className="overflow-hidden">
        <CardHeader className="text-center">
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                Get in Touch
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
                We'd love to hear from you. Drop us a line below.
            </motion.p>
        </CardHeader>
        <CardContent>
             <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants} className="space-y-2">
                    <Input placeholder="Enter your name" id="name" type="text" name="name" />
                     <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-sm text-destructive"
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                    <Input placeholder="Enter your Email" id="email" type="email" name="email" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-sm text-destructive"
                    />
                </motion.div>
                 <motion.div variants={itemVariants} className="space-y-2">
                    <input type="hidden" name="subject" value="[No subject selected]" />
                    <Select name="subject">
                        <SelectTrigger id="subject-select">
                            <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                            <SelectItem value="Support">Support Request</SelectItem>
                            <SelectItem value="Pricing">Pricing Question</SelectItem>
                            <SelectItem value="Corporate Plan">Corporate Plan</SelectItem>
                            <SelectItem value="Feedback">Feedback</SelectItem>
                        </SelectContent>
                    </Select>
                    <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                        className="text-sm text-destructive"
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                    <Textarea placeholder="Enter your Message" id="message" name="message" rows={5}/>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-sm text-destructive"
                    />
                </motion.div>
                <motion.div variants={itemVariants}>
                    <Button type="submit" size="lg" className="w-full" disabled={state.submitting}>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                    </Button>
                </motion.div>
            </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
