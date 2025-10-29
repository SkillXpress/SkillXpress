
'use client';

import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

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

const ContactForm = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mgvpyoqn");

  if (state.succeeded) {
    return (
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto max-w-3xl text-center"
        >
            <Card>
                <CardContent className="p-10">
                    <motion.h2 variants={itemVariants} className="text-2xl font-bold tracking-tight sm:text-3xl font-headline">
                        Thanks for your message!
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-muted-foreground">
                        We'll get back to you shortly.
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
                    <Input placeholder="Your Name" id="name" type="text" name="name" />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                    <Input placeholder="Your Email" id="email" type="email" name="email" />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-sm text-destructive"
                    />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-2">
                    <Textarea placeholder="Your Message" id="message" name="message" rows={5}/>
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
