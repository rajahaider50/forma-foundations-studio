package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BudgetsScreen(onCreate:()->Unit){Card{Column{Text("Budgets");Text("Domain-specific budgets workflow");Button(onClick=onCreate){Text("Create")}}}}
