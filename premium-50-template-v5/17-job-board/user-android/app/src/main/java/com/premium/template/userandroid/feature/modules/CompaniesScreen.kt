package com.premium.template.userandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun CompaniesScreen(onCreate:()->Unit){Card{Column{Text("Companies");Text("Domain-specific companies workflow");Button(onClick=onCreate){Text("Create")}}}}
