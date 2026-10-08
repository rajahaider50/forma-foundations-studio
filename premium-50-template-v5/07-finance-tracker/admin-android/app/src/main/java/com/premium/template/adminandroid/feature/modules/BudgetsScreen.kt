package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun BudgetsScreen(onCreate:()->Unit){Card{Column{Text("Budgets");Text("Domain-specific budgets workflow");Button(onClick=onCreate){Text("Create")}}}}
