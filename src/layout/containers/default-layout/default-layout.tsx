import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";

import styles from './default-layout.module.scss';

import { Header } from "src/layout/components";

export type DefaultLayoutProps = {
	maxWidth?: string
}

export function DefaultLayout({ maxWidth = "1920px" }: DefaultLayoutProps) {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<main>
					<div className={styles.pageWrapper}>
						<div className={styles.pageWrapper__container} style={{ maxWidth }}>
							<ErrorBoundary fallback={<div>There was an error while loading the page</div>}>
								<Suspense fallback={<div style={{ width: "100%" }}>Loading...</div>}>
									<Outlet />
								</Suspense>
							</ErrorBoundary>
						</div>
					</div>
				</main>
			</div>
		</>
	);
}

export default DefaultLayout;
