import dotenv from "dotenv";

dotenv.config();

if (process.env.CLOUDFLARE_API_KEY) {
  console.warn(
    "Using Global API Key is very risky for your Cloudflare account. It is strongly recommended to create an API Token with scoped permissions instead."
  );
}

export const API_KEY = process.env.CLOUDFLARE_API_KEY;

export const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const BLOCK_PAGE_ENABLED = !!parseInt(process.env.BLOCK_PAGE_ENABLED, 10);

export const BLOCK_BASED_ON_SNI = !!parseInt(process.env.BLOCK_BASED_ON_SNI, 10);

export const DEBUG = !!parseInt(process.env.DEBUG, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  ? process.env.ALLOWLIST_URLS.split("\n").filter((x) => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter((x) => x)
  : undefined;

// These are the default blocklists and allowlists that are used by the script if the user doesn't provide any URLs by themselves.
// The files are dynamically fetched from the internet, therefore it's important to choose only the most reliable sources.
// Commented out lists are subject to removal. 
export const RECOMMENDED_ALLOWLIST_URLS = [
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  "https://raw.githubusercontent.com/AdguardTeam/AdGuardSDNSFilter/master/Filters/exclusions.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/issues.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/windows.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/android.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/sensitive.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/firefox.txt",
  "https://raw.githubusercontent.com/nextdns/click-tracking-domains/main/domains",
  // Commented out because it whitelists sites including doubleclick.net and ad.atdmt.com
  // https://raw.githubusercontent.com/anudeepND/whitelist/master/domains/referral-sites.txt,
  // Uncomment the line below to use OISD's most commmonly whitelisted list
];

export const RECOMMENDED_BLOCKLIST_URLS = [
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/light.txt",
  // "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/multi.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.txt",
  //  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/wildcard/pro.plus.txt",
  // "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
  // "https://small.oisd.nl/domainswild2",
  // "https://big.oisd.nl/domainswild",
];
