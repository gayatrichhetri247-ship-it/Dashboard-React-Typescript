import React from "react";
import logo from "../../assets/images/dreamlogo.png";
import { RxCross2 } from "react-icons/rx";
import Dropdown from "./Dropdown";
import {
  RiDashboardHorizontalLine,
  RiGitRepositoryCommitsLine,
  RiRefund2Line,
} from "react-icons/ri";
import {
  MdAssignmentAdd,
  MdCardMembership,
  MdDeleteSweep,
  MdDomain,
  MdError,
  MdFeedback,
  MdHolidayVillage,
  MdInventory,
  MdLeaderboard,
  MdLocalFireDepartment,
  MdOnDeviceTraining,
  MdOutlineCampaign,
  MdOutlineContactPhone,
  MdOutlineDeliveryDining,
  MdOutlineDownloadDone,
  MdPolicy,
  MdSettingsApplications,
} from "react-icons/md";
import {
  BiCube,
  BiSolidPurchaseTag,
  BiSolidUserRectangle,
} from "react-icons/bi";
import SidebarItem from "./SidebarItem";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import {
  GiInterleavedArrows,
  GiScarecrow,
  GiSwordBrandish,
} from "react-icons/gi";
import { DiUnitySmall } from "react-icons/di";
import { BsBoxArrowUpRight, BsCashCoin } from "react-icons/bs";
import {
  FaAccessibleIcon,
  FaAlipay,
  FaBarcode,
  FaBuilding,
  FaChartBar,
  FaIdeal,
  FaSalesforce,
  FaTasks,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";
import { FaRegFileZipper, FaSheetPlastic } from "react-icons/fa6";
import {
  PiCashRegister,
  PiInvoice,
  PiKeyReturnDuotone,
  PiMoneyWavyLight,
  PiStackOverflowLogoFill,
} from "react-icons/pi";
import { HiInbox, HiOutlineDocumentReport } from "react-icons/hi";
import { IoMdAnalytics, IoMdTrendingDown } from "react-icons/io";
import { TbPipeline, TbReceiptTax } from "react-icons/tb";
import {
  SiActualbudget,
  SiBasicattentiontoken,
  SiChevrolet,
  SiGoogledocs,
  SiKeepachangelog,
} from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import {
  IoChatbubbleEllipses,
  IoPrintSharp,
  IoQrCodeOutline,
  IoSettingsSharp,
  IoTicket,
} from "react-icons/io5";
import { CgPerformance } from "react-icons/cg";
import { AiFillMessage, AiFillProject } from "react-icons/ai";
import { LuFilePenLine, LuUtilityPole, LuWorkflow } from "react-icons/lu";
import { GrResources, GrTransaction } from "react-icons/gr";
import { VscMilestone } from "react-icons/vsc";
import { CiViewTable } from "react-icons/ci";
import { GoMultiSelect } from "react-icons/go";
const SideBar = () => {
  return (
    <div className="w-70 min-h-auto p-4 flex flex-col gap-4 border-[0.2px] border-gray-300 rounded-lg text-gray-700 shadow-xl">
      <div className=" flex justify-between">
        <img src={logo} className="h-6 w-auto" />
        <RxCross2 />
      </div>
      <div className="w-full border-t-[0.1px] border-gray-300"></div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Main</h1>
        <div className="flex flex-col gap-2">
          <Dropdown
            title="dashboard"
            items={[
              "HRM Dashboard",
              "Inventory Dashboard",
              "CRM Dashboard",
              "POS dashboard",
              "finance dashboard",
              "sales dashboard",
              "procurement dashboard",
              "project dashboard",
              "support dashboard",
            ]}
            isCapitalize={true}
            icon={<RiDashboardHorizontalLine />}
          />
          <Dropdown
            title="applications"
            items={[
              "chat",
              "calls",
              "calendar",
              "email",
              "file manager",
              "notes",
              "to do",
              "workflow & approvals",
            ]}
            isCapitalize={true}
            icon={<MdSettingsApplications />}
          />
          <Dropdown
            title="layouts"
            items={[
              "mini sidebar",
              "hover view",
              "hidden menu",
              "full width",
              "RTL",
            ]}
            isCapitalize={true}
            icon={<BiCube />}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Inventory</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="products"
            icon={<MdOutlineProductionQuantityLimits />}
            isCapitalize={true}
          />
          <SidebarItem
            title="categories"
            icon={<MdCategory />}
            isCapitalize={true}
          />
          <SidebarItem
            title="Brands"
            icon={<GiSwordBrandish />}
            isCapitalize={true}
          />
          <SidebarItem
            title="units"
            icon={<DiUnitySmall />}
            isCapitalize={true}
          />
          <SidebarItem
            title="inventory"
            icon={<MdInventory />}
            isCapitalize={true}
          />
          <Dropdown
            title="stock"
            icon={<BsBoxArrowUpRight />}
            isCapitalize={true}
            items={["manage stock", "stock adjustment", "stock transfer"]}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Sales</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="customers"
            icon={<BiSolidUserRectangle />}
            isCapitalize={true}
          />
          <SidebarItem
            title="sales orders"
            icon={<FaSalesforce />}
            isCapitalize={true}
          />
          <SidebarItem
            title="recurring invoices"
            icon={<FaRegFileZipper />}
            isCapitalize={true}
          />
          <SidebarItem
            title="invoice templates"
            icon={<PiInvoice />}
            isCapitalize={true}
          />
          <SidebarItem
            title="credit notes"
            icon={<PiMoneyWavyLight />}
            isCapitalize={true}
          />
          <SidebarItem
            title="cash sales"
            icon={<BsCashCoin />}
            isCapitalize={true}
          />
          <SidebarItem
            title="refunds"
            icon={<RiRefund2Line />}
            isCapitalize={true}
          />
          <SidebarItem
            title="delivery notes"
            icon={<MdOutlineDeliveryDining />}
            isCapitalize={true}
          />
          <SidebarItem
            title="sales analytics"
            icon={<IoMdAnalytics />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Purchase</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="purchases"
            icon={<BiSolidPurchaseTag />}
            isCapitalize={true}
          />
          <SidebarItem
            title="purchase orders"
            icon={<FaRegFileZipper />}
            isCapitalize={true}
          />
          <SidebarItem
            title="purchase return"
            icon={<PiKeyReturnDuotone />}
            isCapitalize={true}
          />
          <SidebarItem title="venders" icon={<FaUsers />} isCapitalize={true} />
          <SidebarItem
            title="procurement analytics"
            icon={<IoMdAnalytics />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Finance</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="expenses"
            icon={<GiExpense />}
            isCapitalize={true}
          />
          <SidebarItem
            title="expense category"
            icon={<MdCategory />}
            isCapitalize={true}
          />
          <SidebarItem
            title="payments"
            icon={<MdOutlinePayments />}
            isCapitalize={true}
          />
          <SidebarItem
            title="cashflow"
            icon={<PiStackOverflowLogoFill />}
            isCapitalize={true}
          />
          <SidebarItem
            title="budgeting"
            icon={<SiActualbudget />}
            isCapitalize={true}
          />
          <SidebarItem
            title="taxes"
            icon={<TbReceiptTax />}
            isCapitalize={true}
          />
          <Dropdown
            title="reports"
            icon={<HiOutlineDocumentReport />}
            isCapitalize={true}
            items={[
              "expense summary",
              "income summary",
              "profit & loss",
              "income VS expense",
              "tax summary",
            ]}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">HRM</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="employees"
            icon={<FaUserTie />}
            isCapitalize={true}
          />
          <SidebarItem
            title="departments"
            icon={<MdLocalFireDepartment />}
            isCapitalize={true}
          />
          <SidebarItem
            title="designations / roles"
            icon={<SiChevrolet />}
            isCapitalize={true}
          />
          <SidebarItem
            title="attendance"
            icon={<SiBasicattentiontoken />}
            isCapitalize={true}
          />
          <Dropdown
            title="leave"
            icon={<GiInterleavedArrows />}
            isCapitalize={true}
            items={["leaves", "leave types"]}
          />
          <SidebarItem
            title="holidays"
            icon={<MdHolidayVillage />}
            isCapitalize={true}
          />
          <SidebarItem
            title="payroll"
            icon={<FaAlipay />}
            isCapitalize={true}
          />
          <SidebarItem
            title="recruitment"
            icon={<GiScarecrow />}
            isCapitalize={true}
          />
          <SidebarItem
            title="performance & appraisal"
            icon={<CgPerformance />}
            isCapitalize={true}
          />
          <SidebarItem
            title="training & development"
            icon={<MdOnDeviceTraining />}
            isCapitalize={true}
          />
          <SidebarItem
            title="hr analytics"
            icon={<IoChatbubbleEllipses />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">CRM</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="contacts"
            icon={<MdOutlineContactPhone />}
            isCapitalize={true}
          />
          <SidebarItem
            title="leads"
            icon={<MdLeaderboard />}
            isCapitalize={true}
          />
          <SidebarItem title="deals" icon={<FaIdeal />} isCapitalize={true} />
          <SidebarItem
            title="pipeline"
            icon={<TbPipeline />}
            isCapitalize={true}
          />

          <SidebarItem
            title="campaigns"
            icon={<MdOutlineCampaign />}
            isCapitalize={true}
          />
          <SidebarItem
            title="customer feedback"
            icon={<MdFeedback />}
            isCapitalize={true}
          />
          <SidebarItem
            title="customer analytics"
            icon={<AiFillMessage />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Projects</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="projects"
            icon={<AiFillProject />}
            isCapitalize={true}
          />
          <SidebarItem title="tasks" icon={<FaTasks />} isCapitalize={true} />
          <SidebarItem
            title="timesheet"
            icon={<FaSheetPlastic />}
            isCapitalize={true}
          />
          <SidebarItem
            title="milestones"
            icon={<VscMilestone />}
            isCapitalize={true}
          />

          <SidebarItem
            title="resource allocation"
            icon={<GrResources />}
            isCapitalize={true}
          />

          <SidebarItem
            title="project analytics"
            icon={<LuFilePenLine />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">POS</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="POS"
            icon={<AiFillProject />}
            isCapitalize={true}
          />
          <SidebarItem
            title="POS Orders"
            icon={<FaRegFileZipper />}
            isCapitalize={true}
          />
          <SidebarItem
            title="barcode print"
            icon={<FaBarcode />}
            isCapitalize={true}
          />
          <SidebarItem
            title="QR code print"
            icon={<IoQrCodeOutline />}
            isCapitalize={true}
          />

          <SidebarItem
            title="print settings"
            icon={<IoPrintSharp />}
            isCapitalize={true}
          />
        </div>
      </div>

      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Assets</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="asset register"
            icon={<PiCashRegister />}
            isCapitalize={true}
          />
          <SidebarItem
            title="assignments"
            icon={<MdAssignmentAdd />}
            isCapitalize={true}
          />
          <SidebarItem
            title="depreciation"
            icon={<IoMdTrendingDown />}
            isCapitalize={true}
          />
          <SidebarItem
            title="maintenance"
            icon={<MdDomain />}
            isCapitalize={true}
          />

          <SidebarItem
            title="disposal"
            icon={<MdDeleteSweep />}
            isCapitalize={true}
          />
          <SidebarItem
            title="asset analytics"
            icon={<AiFillMessage />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Documents</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="document repository"
            icon={<RiGitRepositoryCommitsLine />}
            isCapitalize={true}
          />
          <SidebarItem
            title="policies & manuals"
            icon={<MdPolicy />}
            isCapitalize={true}
          />
          <SidebarItem
            title="compliance docs"
            icon={<SiGoogledocs />}
            isCapitalize={true}
          />
          <SidebarItem
            title="document workflows"
            icon={<LuWorkflow />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Support</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="contact messages"
            icon={<AiFillMessage />}
            isCapitalize={true}
          />
          <SidebarItem
            title="tickets"
            icon={<IoTicket />}
            isCapitalize={true}
          />
          <SidebarItem
            title="knowledge base"
            icon={<SiGoogledocs />}
            isCapitalize={true}
          />
          <SidebarItem
            title="SLA management"
            icon={<SiGoogledocs />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Membership</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="membership plans"
            icon={<MdCardMembership />}
            isCapitalize={true}
          />
          <SidebarItem
            title="membership addons"
            icon={<MdOutlineDownloadDone />}
            isCapitalize={true}
          />
          <SidebarItem
            title="transactions"
            icon={<GrTransaction />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">System</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="user management"
            icon={<BiSolidUserRectangle />}
            isCapitalize={true}
          />
          <SidebarItem
            title="roles & permissions"
            icon={<SiChevrolet />}
            isCapitalize={true}
          />
          <SidebarItem
            title="delete requests"
            icon={<MdDeleteSweep />}
            isCapitalize={true}
          />
          <SidebarItem
            title="settings"
            icon={<IoSettingsSharp />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2   flex flex-col gap-2 ">
        <h1 className="font-bold ">Pages</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="authentication"
            icon={<BiSolidUserRectangle />}
            isCapitalize={true}
          />
          <SidebarItem
            title="error pages"
            icon={<MdError />}
            isCapitalize={true}
          />
          <SidebarItem
            title="utilities"
            icon={<LuUtilityPole />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2   flex flex-col gap-2  ">
        <h1 className="font-bold ">UI Interface</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="base UI"
            icon={<RiDashboardHorizontalLine />}
            isCapitalize={true}
          />
          <SidebarItem
            title="advanced UI"
            icon={<FaBuilding />}
            isCapitalize={true}
          />
          <SidebarItem
            title="forms"
            icon={<SiGoogledocs />}
            isCapitalize={true}
          />
          <SidebarItem
            title="tables"
            icon={<CiViewTable />}
            isCapitalize={true}
          />
          <SidebarItem
            title="charts"
            icon={<FaChartBar />}
            isCapitalize={true}
          />
          <SidebarItem
            title="icons"
            icon={<FaAccessibleIcon />}
            isCapitalize={true}
          />
        </div>
      </div>
      <div className="px-2  flex flex-col gap-2 ">
        <h1 className="font-bold ">Help</h1>
        <div className="flex flex-col gap-2">
          <SidebarItem
            title="documentation"
            icon={<SiGoogledocs />}
            isCapitalize={true}
          />
          <SidebarItem
            title="changelog"
            icon={<SiKeepachangelog />}
            isCapitalize={true}
          />
          <SidebarItem
            title="multi level"
            icon={<GoMultiSelect />}
            isCapitalize={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
