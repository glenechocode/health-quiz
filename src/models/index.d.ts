import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerQuizData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly QuizName: string;
  readonly Question?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuizData = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizData, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly QuizName: string;
  readonly Question?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuizData = LazyLoading extends LazyLoadingDisabled ? EagerQuizData : LazyQuizData

export declare const QuizData: (new (init: ModelInit<QuizData>) => QuizData) & {
  copyOf(source: QuizData, mutator: (draft: MutableModel<QuizData>) => MutableModel<QuizData> | void): QuizData;
}