import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import "@aws-amplify/ui-react/styles.css";
import "./globals.css";
import { ConfigureAmplifyClient } from "@/components/ConfigureAmplify";
import { Toaster } from "sonner";

const body = localFont({ src: "../assets/body.ttf" });

export const metadata: Metadata = {
	title: "Fusionne",
	description: "Events, tech and everything in between.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${body.className} min-h-screen bg-background antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ConfigureAmplifyClient />
					{children}
					<Toaster richColors />
				</ThemeProvider>
			</body>
		</html>
	);
}
