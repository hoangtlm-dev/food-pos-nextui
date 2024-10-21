const Dashboard = () => {
  return (
    <div className="h-full grow p-6 lg:p-8">
      <div className="row-gap-6 grid h-full grid-cols-1 md:grid-cols-6 md:gap-6 lg:grid-cols-9 lg:grid-rows-9">
        {/* Left */}
        <div className="col-span-1 gap-6 sm:grid lg:col-span-6 lg:row-span-9 lg:grid-cols-6 lg:grid-rows-9">
          {/* Heading */}
          <div className="row-span-1 border-b border-dark-line lg:col-span-6">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <p className="text-sm text-light-secondary">Tuesday, 2 Feb 2021</p>
          </div>

          {/* Statistic */}
          <div className="rounded-xxs bg-content1 sm:col-span-2 lg:row-span-2"></div>
          <div className="rounded-xxs bg-content1 sm:col-span-2 lg:row-span-2"></div>
          <div className="rounded-xxs bg-content1 sm:col-span-2 lg:row-span-2"></div>

          {/* Order Report */}
          <div className="col-span-6 row-span-4 rounded-xxs bg-content1 lg:row-span-6"></div>
        </div>

        {/* Right */}
        <div className="col-span-1 grid gap-6 lg:col-span-3 lg:row-span-9 lg:grid-rows-9">
          {/* Most Order */}
          <div className="flex flex-col gap-2 rounded-xxs bg-content1 p-4 lg:col-span-3 lg:row-span-5">
            <div className="flex items-center border-b border-dark-line py-3">
              <h2 className="foont-semibold text-md">Most Ordered</h2>
            </div>
          </div>

          {/* Chart */}
          <div className="col-span-2 rounded-xxs bg-content1 lg:col-span-3 lg:row-span-4"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
