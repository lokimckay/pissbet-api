import {
  selectAll,
  selectById,
  selectByField,
  selectCount,
  selectOrderedByField,
  selectCurrentOpenMatch,
} from "../db/ops";
import { checkCache, cacheResult } from "../lib/cache";

const getRootResolver = ({ db }) => {
  return {
    participants: async ({ count, offset }) => {
      const cached = checkCache("participants");
      if (cached) return cached;

      const results = await selectOrderedByField({
        db,
        table: "participants",
        count,
        offset,
        orderBy: "balance",
        direction: "DESC",
      });
      cacheResult("participants", results);
      return results;
    },
    participant: async ({ id }) => {
      const cached = checkCache("participant");
      if (cached) return cached;

      const result = await selectById({ db, table: "participants", id });
      cacheResult(`participant-${id}`, result);
      return result;
    },
    countParticipants: async () => {
      const cached = checkCache("countParticipants");
      if (cached) return cached;

      const total = await selectCount({ db, table: "participants" });
      cacheResult("countParticipants", total["COUNT(*)"]);
      return total["COUNT(*)"];
    },
    playerByTag: async ({ tag }) => {
      const cached = checkCache("playerByTag");
      if (cached) return cached;

      const result = await selectByField({
        db,
        table: "players",
        field: "tag",
        value: tag,
      });
      cacheResult(`playerByTag-${tag}`, result);
      return result;
    },
    allPlayers: async () => {
      const cached = checkCache("allPlayers");
      if (cached) return cached;

      const results = await selectAll({ db, table: "players" });
      cacheResult("allPlayers", results);
      return results;
    },
    allBets: async () => {
      const cached = checkCache("allBets");
      if (cached) return cached;

      const results = await selectAll({ db, table: "bets" });
      cacheResult("allBets", results);
      return results;
    },
    allMatches: async () => {
      const cached = checkCache("allMatches");
      if (cached) return cached;

      const results = await selectAll({ db, table: "matches" });
      cacheResult("allMatches", results);
      return results;
    },
    currentOpenMatch: async () => {
      const cached = checkCache("currentOpenMatch");
      if (cached) return cached;

      const results = await selectCurrentOpenMatch({ db });
      cacheResult("currentOpenMatch", results);
      return results;
    },
  };
};

export default getRootResolver;
