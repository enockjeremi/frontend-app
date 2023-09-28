
import HeaderContentMain from "./components/home-page/header-main/header-main-content";
import CardReport from "./components/home-page/report-card/card-report";
import { getDataReport } from "./lib/getDataFunctions";

export default async function Home() {
  const data = await getDataReport();

  return (
    <>
      <header className="w-full border-b flex space-y-2 flex-wrap py-2 justify-between items-center  border-black/50">
        <HeaderContentMain />
      </header>
      <section className="w-full grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-3 gap-2 my-3">
        {data.map((report) => (
          <CardReport
            key={report.id}
            id={report.id}
            reportName={report.reportName}
            carModel={report.carModel}
            carYear={report.carYear}
            categoryName={report.categoryName}
            mileage={report.mileage}
            reportDiagnostic={report.reportDiagnostic}
            reportDtc={report.reportDtc}
            reportFault={report.reportFault}
            reportFix={report.reportFix}
          />
        ))}
      </section>
    </>
  );
}
